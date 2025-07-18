import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { setTheme, setCurrentFile, closeFile, setIsAIEnabled } from '../redux/slices/editorSlice';
import { FaPlay, FaCode, FaUsers, FaTimes, FaCopy, FaCheck, FaRobot } from 'react-icons/fa';
import { executeCode, getLanguageId } from '../services/codeExecutionService';
import { setExecuting, setOutput, setExecutionError, resetExecution } from '../redux/slices/codeExecutionSlice';
import { toast } from 'react-hot-toast';

const Header = () => {
  const { folderId, fileId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentFile, openFiles, unsavedChanges, selectedTheme, isAIEnabled } = useSelector((state) => state.editor);
  const { activeFiles } = useSelector((state) => state.editor);
  const { input } = useSelector((state) => state.codeExecution);
  const [currentRoomId, setCurrentRoomId] = useState('');
  const themes = ['vs-dark', 'light', 'hc-black'];
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const roomParam = urlParams.get('room');
    
    if (roomParam) {
      setCurrentRoomId(roomParam);
    } else {
      const newRoomId = uuidv4().substring(0, 8);
      setCurrentRoomId(newRoomId);
      const newSearchParams = new URLSearchParams(window.location.search);
      newSearchParams.set('room', newRoomId);
      const newPath = `${window.location.pathname}${newSearchParams.toString() ? '?' : ''}${newSearchParams.toString()}`;
      window.history.pushState(null, '', newPath);
    }
  }, []);

  const joinRoom = (roomId) => {
    console.log('Joining room:', roomId);
  };

  useEffect(() => {
    if (currentRoomId) {
      joinRoom(currentRoomId);
    }
  }, [currentRoomId]);

  const handleThemeChange = (e) => {
    const theme = e.target.value;
    dispatch(setTheme(theme));
  };

  const [copied, setCopied] = useState(false);
  
  const handleShareRoom = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const roomParam = urlParams.get('room');
    
    if (roomParam) {
      const shareableUrl = window.location.href;
      
      navigator.clipboard.writeText(shareableUrl)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch(err => console.error('Failed to copy:', err));
    }
  };

  const handleAIToggle = (e) => {
    dispatch(setIsAIEnabled(e.target.checked));
  };

  const handleRunCode = async () => {
    if (!currentFile || !activeFiles[currentFile.id]) {
      toast.error('No file selected or file content is empty');
      return;
    }

    setIsRunning(true);
    dispatch(resetExecution());
    dispatch(setExecuting(true));

    try {
      // Get the language ID from the file extension
      const languageId = getLanguageId(currentFile.name);
      
      // Get the code from the current file
      const codeToExecute = activeFiles[currentFile.id];
      
      // Execute the code with the input from the input panel
      const result = await executeCode(codeToExecute, languageId, input);

      if (result.success) {
        // Set the output in the global state
        let finalOutput = result.output;
        
        // If there was an error in the compilation/execution, append it
        if (result.error) {
          finalOutput += '\n\n' + result.error;
        }
        
        dispatch(setOutput(finalOutput));
      } else {
        // Handle execution error
        dispatch(setExecutionError(result.error));
      }
    } catch (error) {
      console.error('Error running code:', error);
      dispatch(setExecutionError('Unexpected error: ' + error.message));
    } finally {
      dispatch(setExecuting(false));
      setIsRunning(false);
    }
  };

  return (
    <div className="w-full flex flex-col bg-[#031d38] border-b border-[#1E4976]">
      {/* Main header */}
      <div className="w-full h-16 flex items-center justify-between px-6">
        {/* Left section */}
        <div className="flex items-center gap-6 flex-nowrap">
          <span className="text-white text-xl font-bold whitespace-nowrap flex items-center gap-2">
            <FaCode className="text-blue-400" />
            CodeSync
          </span>
          
          <motion.select 
            whileTap={{ scale: 0.97 }}
            value={selectedTheme}
            onChange={handleThemeChange}
            className="bg-[#132F4C] text-white px-3 py-2 rounded-lg text-sm border border-[#1E4976]
            focus:outline-none focus:ring-2 focus:ring-[#1E88E5] cursor-pointer w-[120px]"
          >
            {themes.map(theme => (
              <option key={theme} value={theme} className="py-1">
                {theme.charAt(0).toUpperCase() + theme.slice(1)}
              </option>
            ))}
          </motion.select>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-4">
          {/* AI Toggle */}
          <div className="flex items-center gap-2 bg-[#132F4C] px-4 py-2 rounded-lg border border-[#1E4976]">
            <FaRobot className="text-purple-400" />
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isAIEnabled}
                onChange={handleAIToggle}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 
                peer-focus:ring-purple-800 rounded-full peer 
                peer-checked:after:translate-x-full peer-checked:after:border-white 
                after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                after:bg-white after:border-gray-300 after:border after:rounded-full 
                after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600">
              </div>
              <span className="ml-3 text-sm font-medium text-white">AI Assistant</span>
            </label>
          </div>

          {/* Share Room Button */}
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={handleShareRoom}
            className="flex items-center gap-2 bg-[#132F4C] px-4 py-2 rounded-lg border border-[#1E4976] 
            hover:bg-[#1a3a5c] transition-colors duration-200"
          >
            {copied ? (
              <>
                <FaCheck className="text-green-400" />
                <span className="text-green-400">Copied!</span>
              </>
            ) : (
              <>
                <FaUsers className="text-blue-400" />
                <span className="text-white">Share Room</span>
              </>
            )}
          </motion.button>

          {/* Run Button */}
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={handleRunCode}
            disabled={isRunning || !currentFile}
            className={`flex items-center gap-2 ${
              isRunning || !currentFile 
                ? 'bg-green-700 opacity-70 cursor-not-allowed' 
                : 'bg-green-600 hover:bg-green-700'
            } text-white px-4 py-2 rounded-lg 
            transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500`}
          >
            {isRunning ? (
              <>
                <FaPlay className="text-sm animate-pulse" />
                <span>Running...</span>
              </>
            ) : (
              <>
                <FaPlay className="text-sm" />
                <span>Run</span>
              </>
            )}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Header;