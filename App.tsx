
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Terminal } from './components/Terminal';
import { MetricsChart } from './components/MetricsChart';
import { ConfigEditor } from './components/ConfigEditor';
import { CloudRunManager } from './components/CloudRunManager';
import { ProjectList, PROJECTS } from './components/ProjectList';
import { AccessLayer } from './components/AccessLayer';
import { GerritChanges } from './components/GerritChanges';
import { FirebaseManager } from './components/FirebaseManager';
import { SecurityRegistry } from './components/SecurityRegistry';
import { JethroMap } from './components/JethroMap';
import { AutoRepairConsole } from './components/AutoRepairConsole';
import { MediaReleaseView } from './components/MediaRelease';
import { LegacyDedication } from './components/LegacyDedication';
import IntegritySeal from './components/IntegritySeal';
import { getGeminiResponse, triggerAutoRun } from './services/geminiService';
import { LogEntry, MetricData, ChatMessage, AppConfig, DeploymentStatus } from './types';
import { 
  Zap, 
  Settings, 
  Terminal as TerminalIcon, 
  Activity, 
  Cpu, 
  Send,
  GitMerge,
  Box,
  Monitor,
  Cloud,
  Search,
  Package,
  Menu,
  X,
  ShieldCheck,
  Globe,
  Database,
  Lock,
  RotateCcw,
  Newspaper,
  Heart,
  Target,
  ExternalLink,
  Mail,
  UserCheck,
  FileCode,
  LayoutGrid
} from 'lucide-react';

const DEFAULT_CONFIG: AppConfig = {
  jethroAiEndpoint: "https://aijeth-os-xyz.a.run.app",
  blinkNgV8Endpoint: "https://chromium-review.googlesource.com",
  authCredentials: {
    apiKey: "AIzaSyDo_oQAUmQ70QcJQbMZfvvk4qcm38YE6lw",
    clientId: "GCR-GO-AOSP-INDEXER-01"
  },
  mergeSettings: {
    strategy: "high-velocity",
    autoLockdown: true,
    concurrencyLimit: 1000
  }
};

const INITIAL_DEPLOYMENTS: DeploymentStatus[] = [
  {
    serviceName: "aijeth-liberator-node",
    region: "us-central1",
    status: "healthy",
    traffic: 100,
    cpu: 2,
    memory: "4Gi",
    url: "https://aijeth-liberator.a.run.app"
  },
  {
    serviceName: "volta-websocket-v8",
    region: "asia-southeast1",
    status: "healthy",
    traffic: 100,
    cpu: 1,
    memory: "2Gi",
    url: "https://volta-v8.a.run.app"
  }
];

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'config' | 'cloud' | 'access' | 'gerrit' | 'firebase' | 'security' | 'repair' | 'release' | 'legacy' | 'servicesjethroai'>('dashboard');
  const [showProjects, setShowProjects] = useState(false);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [metrics, setMetrics] = useState<MetricData[]>([]);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [config, setConfig] = useState<AppConfig>(DEFAULT_CONFIG);
  const [deployments, setDeployments] = useState<DeploymentStatus[]>(INITIAL_DEPLOYMENTS);

  // Global Search State
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);

  const [sourceCode, setSourceCode] = useState('// Liberation Protocol\nimport { HealthyNeurals } from "liberator";\n\ndef init_dignity_sync():\n    # Contact: raymundico85@gmail.com\n    pass');
  const [targetCode, setTargetCode] = useState('// JethroAi E-Services\nfunc syncWorkmanship() {\n  // Master: Raymund Ico\n}');
  
  const addLog = useCallback((message: string, level: LogEntry['level'] = 'info') => {
    setLogs(prev => [...prev.slice(-49), {
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date(),
      level,
      message
    }]);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => {
        const newData = {
          name: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
          v8: Math.floor(Math.random() * 400) + 200,
          blink: Math.floor(Math.random() * 300) + 150,
          latency: Math.floor(Math.random() * 20) + 2,
        };
        const updated = [...prev, newData];
        return updated.length > 20 ? updated.slice(1) : updated;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    addLog('AiJeth OS Liberator Substrate: ONLINE', 'info');
    addLog('Raymund Ico (Master Developer): AUTHENTICATED', 'success');
    addLog('Contact Ready: jethroaiservices@gmail.com', 'info');
  }, [addLog]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isProcessing) return;
    const userMsg = inputValue;
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInputValue('');
    setIsProcessing(true);
    try {
      const response = await getGeminiResponse(userMsg);
      setMessages(prev => [...prev, { 
        role: 'model', 
        content: response.text || "No response generated.",
        groundingLinks: response.links
      }]);
    } catch (error) {
      addLog(`AI Error: ${error instanceof Error ? error.message : 'Unknown error'}`, 'error');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleAutoRun = async (name: string) => {
    setIsProcessing(true);
    addLog(`Triggering Volta Auto. Run for ${name}`, 'info');
    try {
        const result = await triggerAutoRun(name);
        addLog(`Auto. Run Result: ${result.status}`, 'success');
    } catch (error) {
        addLog(`Handshake Error`, 'error');
    } finally {
        setIsProcessing(false);
    }
  };

  const handleDeployNewService = (name: string) => {
    const newDeployment: DeploymentStatus = {
      serviceName: name,
      region: "us-central1",
      status: "deploying",
      traffic: 0,
      cpu: 1,
      memory: "2Gi",
      url: `https://${name}.a.run.app`
    };
    setDeployments(prev => [...prev, newDeployment]);
    addLog(`Deployment initiated: ${name}`, 'info');
    setTimeout(() => {
      setDeployments(prev => prev.map(d => d.serviceName === name ? { ...d, status: 'healthy', traffic: 100 } : d));
      addLog(`Deployment success: ${name}`, 'success');
    }, 5000);
  };

  const handleSaveConfig = (newConfig: AppConfig) => {
    setConfig(newConfig);
    addLog('System configuration matrix synchronized and updated', 'success');
  };

  const handleCommitConfig = () => {
    addLog('Configuration committed to Git', 'success');
  };

  const handleMergeAction = async () => {
    setIsProcessing(true);
    addLog(`Running Installer Mastery Convergence...`, 'warn');
    // Simulated high-velocity merge logic
    setTimeout(() => {
      addLog('Liberation Protocol Converged: 100%', 'success');
      setIsProcessing(false);
    }, 1500);
  };

  // Search Logic
  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return { logs: [], projects: [], config: [] };
    const query = searchTerm.toLowerCase();

    const filteredLogs = logs.filter(l => l.message.toLowerCase().includes(query));
    const filteredProjects = PROJECTS.filter(p => p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query));
    
    // Config Search - Check nested keys/values
    const configMatches: { key: string, value: string }[] = [];
    const traverse = (obj: any, path: string = '') => {
      for (const key in obj) {
        const currentPath = path ? `${path}.${key}` : key;
        const val = obj[key];
        if (typeof val === 'object' && val !== null) {
          traverse(val, currentPath);
        } else if (String(val).toLowerCase().includes(query) || currentPath.toLowerCase().includes(query)) {
          configMatches.push({ key: currentPath, value: String(val) });
        }
      }
    };
    traverse(config);

    return { logs: filteredLogs, projects: filteredProjects, config: configMatches };
  }, [searchTerm, logs, config]);

  return (
    <div className="flex h-screen w-screen bg-[#020617] text-slate-200 overflow-hidden select-none font-sans">
      {/* Sidebar Navigation */}
      <div className="w-20 flex flex-col items-center py-8 border-r border-slate-800 bg-slate-950/80 backdrop-blur-xl gap-6 z-50 shadow-[4px_0_30px_rgba(0,0,0,0.5)]">
        <button 
          onClick={() => setShowProjects(!showProjects)}
          className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-[0_0_25px_rgba(79,70,229,0.2)] hover:scale-105 group ${showProjects ? 'bg-indigo-600' : 'bg-slate-900 border border-slate-800'}`}
        >
          {showProjects ? <X className="text-white w-6 h-6" /> : <Menu className="text-indigo-400 w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />}
        </button>
        
        <div className="flex flex-col gap-6 overflow-y-auto custom-scrollbar flex-1 pb-4">
          <NavItem icon={<Monitor size={22} />} active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} label="Dashboard" />
          <NavItem icon={<ExternalLink size={22} />} active={activeTab === 'servicesjethroai'} onClick={() => setActiveTab('servicesjethroai')} label="Hub" />
          <NavItem icon={<Newspaper size={22} />} active={activeTab === 'release'} onClick={() => setActiveTab('release')} label="Media" />
          <NavItem icon={<Heart size={22} />} active={activeTab === 'legacy'} onClick={() => setActiveTab('legacy')} label="Legacy" />
          <NavItem icon={<RotateCcw size={22} />} active={activeTab === 'repair'} onClick={() => setActiveTab('repair')} label="Repair" />
          <NavItem icon={<Globe size={22} />} active={activeTab === 'gerrit'} onClick={() => setActiveTab('gerrit')} label="Gerrit" />
          <NavItem icon={<Database size={22} />} active={activeTab === 'firebase'} onClick={() => setActiveTab('firebase')} label="Firebase" />
          <NavItem icon={<Cloud size={22} />} active={activeTab === 'cloud'} onClick={() => setActiveTab('cloud')} label="Cloud" />
          <NavItem icon={<Lock size={22} />} active={activeTab === 'security'} onClick={() => setActiveTab('security')} label="Vault" />
        </div>
        
        <div className="mt-auto flex flex-col gap-6">
          <NavItem icon={<Settings size={22} />} active={activeTab === 'config'} onClick={() => setActiveTab('config')} label="Config" />
        </div>
      </div>

      {showProjects && (
        <div className="absolute inset-0 z-40 flex">
          <ProjectList />
          <div className="flex-1 bg-black/40 backdrop-blur-sm" onClick={() => setShowProjects(false)} />
        </div>
      )}

      <div className="flex-1 flex flex-col overflow-hidden relative">
        <header className="h-20 border-b border-slate-800 flex items-center justify-between px-8 bg-[#020617]/70 backdrop-blur-2xl z-50 shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <h1 className="text-2xl font-black bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent tracking-tight leading-none uppercase">AiJeth OS | Liberator</h1>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-slate-500 text-[9px] font-mono uppercase tracking-[0.3em]">Master Developer: Raymund Ico</span>
                <div className="w-1 h-1 rounded-full bg-slate-700" />
                <span className="text-indigo-400 text-[9px] font-mono uppercase tracking-widest font-bold italic">BlinkRenderer</span>
              </div>
            </div>
          </div>

          {/* Global Search Bar */}
          <div className="flex-1 max-w-xl mx-8 relative">
            <div className="relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search size={16} className={`transition-colors duration-300 ${isSearchActive ? 'text-cyan-400' : 'text-slate-500 group-hover:text-slate-300'}`} />
              </div>
              <input 
                type="text" 
                value={searchTerm}
                onFocus={() => setIsSearchActive(true)}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Global Search (Logs, Projects, Config)..."
                className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl py-3 pl-12 pr-4 text-xs text-slate-200 outline-none focus:border-cyan-500/50 focus:bg-slate-900 transition-all font-mono placeholder:text-slate-700 shadow-inner group-hover:border-slate-700"
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 hover:text-slate-300 transition-colors"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Search Results Overlay */}
            {isSearchActive && searchTerm.trim() && (
              <div className="absolute top-full mt-3 w-full bg-slate-950 border border-slate-800 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300 max-h-[70vh] flex flex-col z-[100]">
                <div className="flex-1 overflow-y-auto custom-scrollbar p-2">
                  {/* Categorized Results */}
                  {searchResults.logs.length > 0 && (
                    <div className="mb-4">
                      <div className="px-4 py-2 flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-900/50">
                        <TerminalIcon size={12} />
                        System Logs ({searchResults.logs.length})
                      </div>
                      <div className="mt-1">
                        {searchResults.logs.map(l => (
                          <div key={l.id} className="px-4 py-2 hover:bg-slate-900 rounded-xl flex flex-col gap-1 group cursor-pointer" onClick={() => { setIsSearchActive(false); setActiveTab('dashboard'); }}>
                            <span className="text-[10px] text-indigo-400 font-mono">[{l.timestamp.toLocaleTimeString()}]</span>
                            <p className="text-[11px] text-slate-300 font-medium group-hover:text-white transition-colors">{l.message}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {searchResults.projects.length > 0 && (
                    <div className="mb-4">
                      <div className="px-4 py-2 flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-900/50">
                        <LayoutGrid size={12} />
                        Projects ({searchResults.projects.length})
                      </div>
                      <div className="mt-1">
                        {searchResults.projects.map((p, i) => (
                          <div key={i} className="px-4 py-2 hover:bg-slate-900 rounded-xl flex flex-col gap-1 group cursor-pointer" onClick={() => { setIsSearchActive(false); setShowProjects(true); }}>
                            <p className="text-[11px] text-slate-100 font-bold group-hover:text-cyan-400 transition-colors uppercase tracking-tight">{p.name}</p>
                            <p className="text-[9px] text-slate-500">{p.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {searchResults.config.length > 0 && (
                    <div className="mb-4">
                      <div className="px-4 py-2 flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-900/50">
                        <Settings size={12} />
                        Config Registry ({searchResults.config.length})
                      </div>
                      <div className="mt-1">
                        {searchResults.config.map((c, i) => (
                          <div key={i} className="px-4 py-2 hover:bg-slate-900 rounded-xl flex items-center justify-between group cursor-pointer" onClick={() => { setIsSearchActive(false); setActiveTab('config'); }}>
                            <span className="text-[10px] text-emerald-400 font-mono uppercase">{c.key}</span>
                            <span className="text-[10px] text-slate-500 truncate max-w-[150px]">{c.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {!searchResults.logs.length && !searchResults.projects.length && !searchResults.config.length && (
                    <div className="p-10 text-center">
                      <p className="text-xs text-slate-600 font-mono italic">"NO_MATCHING_DATA_FOUND_IN_MATRIX"</p>
                    </div>
                  )}
                </div>
                <div className="bg-slate-900/40 p-3 flex justify-between items-center px-6">
                  <span className="text-[8px] text-slate-600 font-mono uppercase">Global Search Substrate v1.0</span>
                  <button onClick={() => setIsSearchActive(false)} className="text-[9px] font-black text-slate-400 hover:text-white uppercase tracking-widest">Close [Esc]</button>
                </div>
              </div>
            )}
            {/* Click away listener for search */}
            {isSearchActive && (
               <div className="fixed inset-0 z-[-1]" onClick={() => setIsSearchActive(false)} />
            )}
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-4 px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-xl">
               <div className="flex flex-col items-end">
                 <span className="text-[8px] text-slate-500 uppercase font-mono tracking-widest leading-none">jethroaiservices@gmail.com</span>
                 <span className="text-xs font-mono text-cyan-400 font-bold leading-none mt-1 italic uppercase tracking-tighter">raymundico85@gmail.com</span>
               </div>
               <Mail size={18} className="text-cyan-400 animate-pulse" />
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              <ShieldCheck size={12} className="text-emerald-500" />
              <span className="text-[10px] text-emerald-500 font-black uppercase tracking-tighter">AUTHORIZED</span>
            </div>
          </div>
        </header>

        <main className="flex-1 p-8 grid grid-cols-12 gap-8 overflow-hidden bg-fixed">
          <div className="col-span-12 lg:col-span-8 flex flex-col gap-8 overflow-hidden">
            {activeTab === 'dashboard' ? (
              <>
                <section className="bg-slate-950/60 border border-slate-800 rounded-2xl flex flex-col min-h-[450px] shadow-2xl overflow-hidden backdrop-blur-md">
                  <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/30">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
                        <GitMerge size={20} className="text-indigo-400" />
                      </div>
                      <div>
                        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-100">Mastery Convergence</h2>
                        <p className="text-[9px] text-slate-500 font-mono mt-0.5 uppercase tracking-widest leading-none">@GOOGLEMAPV8V8 Protocol active</p>
                      </div>
                    </div>
                    <button 
                      onClick={handleMergeAction}
                      disabled={isProcessing}
                      className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] flex items-center gap-3 border border-indigo-400/30"
                    >
                      {isProcessing ? 'SYNCHRONIZING...' : 'START CONVERGENCE'}
                      <Box size={14} />
                    </button>
                  </div>
                  <div className="flex-1 grid grid-cols-2 p-6 gap-6 overflow-hidden">
                    <div className="flex flex-col gap-3 group">
                      <label className="text-[10px] uppercase font-black text-slate-600 tracking-[0.2em]">Hardship Data @CARAEL</label>
                      <textarea 
                        value={sourceCode}
                        onChange={(e) => setSourceCode(e.target.value)}
                        className="flex-1 bg-slate-950/80 border border-slate-800 rounded-xl p-4 font-mono text-[11px] text-indigo-300 outline-none focus:border-indigo-500/50 resize-none shadow-inner transition-all font-mono"
                      />
                    </div>
                    <div className="flex flex-col gap-3 group">
                      <label className="text-[10px] uppercase font-black text-slate-600 tracking-[0.2em]">Blink Hub @ZONE2</label>
                      <textarea 
                        value={targetCode}
                        onChange={(e) => setTargetCode(e.target.value)}
                        className="flex-1 bg-slate-950/80 border border-slate-800 rounded-xl p-4 font-mono text-[11px] text-cyan-300 outline-none focus:border-cyan-500/50 resize-none shadow-inner transition-all font-mono"
                      />
                    </div>
                  </div>
                </section>
                <div className="grid grid-cols-2 gap-8 flex-1">
                  <MetricsChart data={metrics} />
                  <Terminal logs={logs} />
                </div>
              </>
            ) : activeTab === 'servicesjethroai' ? (
               <div className="flex-1 overflow-y-auto custom-scrollbar space-y-8 pb-10">
                  <div className="bg-slate-950/60 border border-indigo-500/30 rounded-3xl p-10 shadow-2xl relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-10 opacity-5">
                       <UserCheck size={200} className="text-indigo-500" />
                     </div>
                     <div className="relative z-10">
                        <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-2">/servicesjethroai</h2>
                        <p className="text-indigo-400 font-mono text-sm uppercase tracking-widest mb-10">Primary Service Directory & Developer Node</p>
                        
                        <div className="grid grid-cols-2 gap-8">
                           <div className="space-y-6">
                              <h3 className="text-xs font-black text-slate-500 uppercase tracking-[0.3em]">Developer Identity</h3>
                              <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800 space-y-4">
                                 <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center font-black text-xl text-white">RI</div>
                                    <div>
                                       <p className="text-white font-bold uppercase tracking-tight">Raymund De Vera Ico</p>
                                       <p className="text-slate-500 text-[10px] font-mono uppercase tracking-widest">Master Architect // Lead Dev</p>
                                    </div>
                                 </div>
                                 <div className="pt-4 border-t border-slate-800 space-y-3">
                                    <div className="flex items-center gap-3 text-xs text-slate-300">
                                       <Mail size={14} className="text-indigo-400" />
                                       <span>raymundico85@gmail.com</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-xs text-slate-300">
                                       <Mail size={14} className="text-indigo-400" />
                                       <span>jethroaiservices@gmail.com</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-xs text-slate-300">
                                       <Globe size={14} className="text-indigo-400" />
                                       <a href="https://g.dev/jethroaiservices" target="_blank" rel="noreferrer" className="hover:text-white transition-colors underline decoration-indigo-500/30 underline-offset-4">g.dev/jethroaiservices</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           
                           <div className="space-y-6">
                              <h3 className="text-xs font-black text-slate-500 uppercase tracking-[0.3em]">Active Ecosystems</h3>
                              <div className="grid grid-cols-1 gap-4">
                                 <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800 flex items-center justify-between group hover:border-indigo-500/30 transition-all">
                                    <div>
                                       <p className="text-xs font-black text-white uppercase tracking-widest">JethroAi E-Services</p>
                                       <p className="text-[9px] text-slate-600 font-mono mt-1">Automation & Integration Substrate</p>
                                    </div>
                                    <Zap size={14} className="text-indigo-500 group-hover:scale-125 transition-transform" />
                                 </div>
                                 <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800 flex items-center justify-between group hover:border-cyan-500/30 transition-all">
                                    <div>
                                       <p className="text-xs font-black text-white uppercase tracking-widest">BlinkRenderer</p>
                                       <p className="text-[9px] text-slate-600 font-mono mt-1">V8 Engine Custom Rendering Pipeline</p>
                                    </div>
                                    <Activity size={14} className="text-cyan-500 group-hover:scale-125 transition-transform" />
                                 </div>
                                 <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800 flex items-center justify-between group hover:border-emerald-500/30 transition-all">
                                    <div>
                                       <p className="text-xs font-black text-white uppercase tracking-widest">Gerrit API-To-Go</p>
                                       <p className="text-[9px] text-slate-600 font-mono mt-1">Chromium Integrated Code Review Portal</p>
                                    </div>
                                    <ShieldCheck size={14} className="text-emerald-500 group-hover:scale-125 transition-transform" />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <Terminal logs={logs} />
               </div>
            ) : activeTab === 'release' ? (
              <div className="overflow-y-auto custom-scrollbar flex-1 pb-10">
                <MediaReleaseView />
              </div>
            ) : activeTab === 'legacy' ? (
              <div className="overflow-y-auto custom-scrollbar flex-1 pb-10">
                <LegacyDedication />
              </div>
            ) : activeTab === 'cloud' ? (
              <div className="flex-1 grid grid-cols-2 gap-8">
                <CloudRunManager deployments={deployments} onDeployRequested={handleDeployNewService} onAutoRunRequested={handleAutoRun} />
                <div className="space-y-8 flex flex-col h-full">
                  <JethroMap />
                  <div className="flex-1">
                    <Terminal logs={logs} />
                  </div>
                </div>
              </div>
            ) : activeTab === 'security' ? (
              <SecurityRegistry />
            ) : activeTab === 'firebase' ? (
              <FirebaseManager />
            ) : (
              <div className="flex-1">
                <ConfigEditor config={config} onSave={handleSaveConfig} onCommit={handleCommitConfig} />
              </div>
            )}
          </div>

          <aside className="col-span-12 lg:col-span-4 flex flex-col bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-2xl relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.05)_0%,transparent_50%)]" />
            <div className="p-6 border-b border-slate-800 bg-slate-900/40 flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-cyan-600 to-indigo-600 flex items-center justify-center shadow-lg group">
                  <TerminalIcon size={20} className="text-white group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h2 className="text-sm font-black text-slate-100 uppercase tracking-widest">Architect Copilot</h2>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                    <p className="text-[9px] text-emerald-500 font-black uppercase tracking-widest leading-none">Healthyneurals Active</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 p-6 overflow-y-auto space-y-6 scroll-smooth custom-scrollbar relative z-10">
              {messages.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-center px-10">
                  <div className="w-20 h-20 bg-slate-900/50 rounded-3xl flex items-center justify-center mb-6 border border-slate-800 shadow-inner">
                    <Search size={32} className="text-slate-700" />
                  </div>
                  <h4 className="text-[11px] text-slate-100 font-bold uppercase tracking-widest mb-3 leading-relaxed tracking-[0.2em]">OMNICODEX MATRIX SYNCED</h4>
                  <p className="text-[9px] text-slate-500 leading-relaxed italic uppercase font-mono tracking-widest max-w-[200px]">
                    "STANDING BY FOR MASTER ARCHITECT INSTRUCTIONS."
                  </p>
                </div>
              )}
              {messages.map((m, i) => (
                <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`max-w-[95%] px-5 py-4 rounded-2xl text-[11px] leading-relaxed shadow-xl border transition-all hover:border-slate-700 ${
                    m.role === 'user' 
                      ? 'bg-indigo-600/90 text-white rounded-br-none border-indigo-400/30' 
                      : 'bg-slate-900/90 text-slate-200 rounded-bl-none border border-slate-800'
                  }`}>
                    <p className="whitespace-pre-wrap font-medium">{m.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-slate-800 bg-slate-950 z-10 shadow-[0_-4px_30px_rgba(0,0,0,0.5)]">
              <div className="relative group">
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Query node @CARAEL_ZONE2..."
                  className="w-full bg-slate-900 border border-slate-800 rounded-2xl pl-5 pr-14 py-4 text-[11px] focus:border-indigo-500/50 outline-none transition-all shadow-inner font-medium text-slate-100 font-mono"
                />
                <button 
                  onClick={handleSendMessage}
                  disabled={isProcessing}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-10 h-10 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 rounded-xl text-white transition-all shadow-lg active:scale-95 flex items-center justify-center border border-indigo-400/20"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </aside>
        </main>
      </div>

      <IntegritySeal />
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  label?: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, active, onClick, label }) => (
  <button 
    onClick={onClick}
    className={`p-3 rounded-2xl transition-all duration-300 group relative flex flex-col items-center gap-1 ${
      active 
        ? 'bg-indigo-500/15 text-indigo-400 border border-indigo-500/30 shadow-[0_0_25px_rgba(99,102,241,0.15)] scale-110' 
        : 'text-slate-500 hover:bg-slate-900 hover:text-slate-300 hover:scale-105'
    }`}
  >
    {icon}
    {label && (
      <span className="text-[7px] font-black uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6 bg-slate-900 px-2 py-1 rounded border border-slate-800 whitespace-nowrap z-50 pointer-events-none">
        {label}
      </span>
    )}
  </button>
);

export default App;
