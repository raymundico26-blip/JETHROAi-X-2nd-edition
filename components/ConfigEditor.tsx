
import React, { useState } from 'react';
import { Save, RefreshCcw, FileJson, GitCommit } from 'lucide-react';
import { AppConfig } from '../types';

interface ConfigEditorProps {
  config: AppConfig;
  onSave: (newConfig: AppConfig) => void;
  onCommit?: () => void;
}

export const ConfigEditor: React.FC<ConfigEditorProps> = ({ config, onSave, onCommit }) => {
  const [jsonText, setJsonText] = useState(JSON.stringify(config, null, 2));
  const [error, setError] = useState<string | null>(null);

  const handleSave = () => {
    try {
      const parsed = JSON.parse(jsonText);
      onSave(parsed);
      setError(null);
      return true;
    } catch (e) {
      setError('Invalid JSON format. Check syntax.');
      return false;
    }
  };

  const handleCommit = () => {
    const success = handleSave();
    if (success && onCommit) {
      onCommit();
    }
  };

  const resetToDefault = () => {
    setJsonText(JSON.stringify(config, null, 2));
    setError(null);
  };

  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-xl flex flex-col h-full overflow-hidden">
      <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/30">
        <div className="flex items-center gap-2 text-indigo-400">
          <FileJson size={18} />
          <span className="text-sm font-semibold text-slate-200">System Configuration (AppConfig.json)</span>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={resetToDefault}
            className="p-1.5 hover:bg-slate-800 rounded-md text-slate-500 transition-colors"
            title="Reset"
          >
            <RefreshCcw size={16} />
          </button>
          <button 
            onClick={handleSave}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-md text-xs font-bold transition-all shadow-lg flex items-center gap-2 border border-slate-700"
          >
            <Save size={14} />
            APPLY
          </button>
          <button 
            onClick={handleCommit}
            className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md text-xs font-bold transition-all shadow-lg flex items-center gap-2"
          >
            <GitCommit size={14} />
            COMMIT CHANGES
          </button>
        </div>
      </div>
      <div className="flex-1 relative font-mono text-sm">
        <textarea
          value={jsonText}
          onChange={(e) => setJsonText(e.target.value)}
          spellCheck={false}
          className="w-full h-full bg-slate-950 p-6 text-indigo-300 outline-none focus:ring-1 focus:ring-indigo-500/30 resize-none overflow-y-auto"
        />
        {error && (
          <div className="absolute bottom-4 left-4 right-4 bg-red-500/10 border border-red-500/20 p-3 rounded-lg flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs text-red-400 font-bold uppercase">{error}</span>
          </div>
        )}
      </div>
    </div>
  );
};
