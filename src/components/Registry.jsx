import React, { useState, useEffect, useRef } from 'react'
import {
  ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon, SearchIcon, FilterIcon,
  SyncIcon, RepositoryIcon, ArtifactIcon, ViewIcon, TableIcon, MoreVertIcon,
  GitHubIcon, DockerIcon, NpmIcon, GoIcon, MavenIcon, ArchiveIcon, PlusIcon,
  RefreshIcon, CloseIcon, ArrowTopRightIcon, ArrowUpIcon, SendIcon, BellIcon,
  AIIcon, CheckCircleIcon, SkullIcon, DotIcon, MenuIcon, GridIcon
} from './Icons'

const IconButton = ({ children, className = "", onClick }) => (
  <button 
    className={`p-2 rounded-xl hover:bg-gray-700 transition-colors ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
)

const Registry = () => {
  const [viewMode, setViewMode] = useState('table') // 'table' or 'grid'
  const [searchQuery, setSearchQuery] = useState('')
  const [chatMessage, setChatMessage] = useState('')
  const [selectedOrg, setSelectedOrg] = useState('jfrog-dev')
  const [activeTab, setActiveTab] = useState('repos') // 'repos' or 'artifacts'
  const [showOrgDropdown, setShowOrgDropdown] = useState(false)
  const [chatWidth, setChatWidth] = useState(324)
  const [isDragging, setIsDragging] = useState(false)
  const [chatHistory, setChatHistory] = useState([
    { role: 'assistant', content: 'Hello! I am Fly, your JFrog assistant. How can I help you manage your registry today?' }
  ])
  const dropdownRef = useRef(null)
  const chatPanelRef = useRef(null)

  const initialRepos = [
    { name: "frontend-dashboard", artifacts: 12, updated: "1 min ago", org: "jfrog-dev" },
    { name: "api-service-main", artifacts: 8, updated: "3 days ago", org: "jfrog-dev" },
    { name: "mobile-app-ios", artifacts: 15, updated: "3 days ago", org: "jfrog-dev" },
    { name: "auth-provider", artifacts: 0, updated: "No data found", notConfigured: true, org: "jfrog-dev" },
    { name: "legacy-utils", artifacts: 4, updated: "1 week ago", org: "another-org" },
    { name: "test-harness", artifacts: 2, updated: "2 hours ago", org: "test-org" }
  ]

  const initialArtifacts = [
    { name: "dashboard-ui:latest", type: "Docker", size: "245MB", updated: "2 hours ago", versions: 32, org: "jfrog-dev" },
    { name: "api-backend:v1.2.3", type: "Docker", size: "189MB", updated: "1 day ago", versions: 18, org: "jfrog-dev" },
    { name: "shared-components@2.1.0", type: "NPM", size: "45MB", updated: "3 days ago", versions: 12, org: "jfrog-dev" },
    { name: "auth-svc:stable", type: "Docker", size: "156MB", updated: "1 week ago", versions: 8, org: "jfrog-dev" },
    { name: "go-lib-common@v0.5.1", type: "Go", size: "12MB", updated: "2 weeks ago", versions: 5, org: "jfrog-dev" }
  ]

  const filteredRepos = initialRepos.filter(repo =>
    repo.org === selectedOrg &&
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const filteredArtifacts = initialArtifacts.filter(art =>
    art.org === selectedOrg &&
    art.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleChatSubmit = (e) => {
    e.preventDefault()
    if (chatMessage.trim()) {
      const newUserMsg = { role: 'user', content: chatMessage }
      setChatHistory([...chatHistory, newUserMsg])
      setChatMessage('')

      // Simulate AI response
      setTimeout(() => {
        setChatHistory(prev => [...prev, {
          role: 'assistant',
          content: `I've analyzed your request about "${chatMessage}". I can help you with that. Would you like to see more details?`
        }])
      }, 1000)
    }
  }

  const handleSync = () => {
    console.log('Syncing repositories for', selectedOrg)
  }

  const handleConfigure = (repoName) => {
    console.log('Configuring repository:', repoName)
  }

  const toggleViewMode = () => {
    setViewMode(viewMode === 'table' ? 'grid' : 'table')
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  const toggleOrgDropdown = () => {
    setShowOrgDropdown(!showOrgDropdown)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowOrgDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        const containerWidth = window.innerWidth
        const newWidth = Math.max(280, Math.min(600, containerWidth - e.clientX))
        setChatWidth(newWidth)
      }
    }
    const handleMouseUp = () => setIsDragging(false)

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.body.style.cursor = 'col-resize'
      document.body.style.userSelect = 'none'
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.body.style.cursor = ''
      document.body.style.userSelect = ''
    }
  }, [isDragging])

  const handleDragStart = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  return (
    <div className="bg-[#121212] flex flex-row gap-2.5 items-center justify-start p-0 relative w-full h-screen text-fly-text">
      <div className="basis-0 bg-[#1c1c1c] flex flex-row grow h-full items-center justify-start min-h-px min-w-px p-0 relative shrink-0">

        {/* Sidebar */}
        <div className="flex flex-col h-full items-center justify-start max-w-[88px] pb-4 pt-0 px-0 relative shrink-0 bg-[#121212]">
          <div className="basis-0 flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
            <button
              onClick={() => handleTabChange('repos')}
              className={`flex flex-col gap-0.5 items-center justify-center min-h-14 min-w-14 px-1 py-2 relative shrink-0 transition-opacity ${activeTab === 'repos' ? 'opacity-100' : 'opacity-60 hover:opacity-80'}`}
            >
              <div className={`flex flex-row gap-2 items-center justify-center p-0 relative rounded-full w-8 h-8 ${activeTab === 'repos' ? 'bg-[#292929] border border-[#474747]' : ''}`}>
                <RepositoryIcon className={`w-4 h-4 ${activeTab === 'repos' ? 'text-fly-accent-10' : 'text-gray-400'}`} />
              </div>
            </button>
            <button
              onClick={() => handleTabChange('artifacts')}
              className={`flex flex-col gap-0.5 items-center justify-center min-h-14 min-w-14 px-1 py-2 relative shrink-0 transition-opacity ${activeTab === 'artifacts' ? 'opacity-100' : 'opacity-60 hover:opacity-80'}`}
            >
              <div className={`flex flex-row gap-2 items-center justify-center p-2 relative rounded-full w-8 h-8 ${activeTab === 'artifacts' ? 'bg-[#292929] border border-[#474747]' : ''}`}>
                <ArtifactIcon className={`w-4 h-4 ${activeTab === 'artifacts' ? 'text-fly-accent-10' : 'text-gray-400'}`} />
              </div>
            </button>
          </div>
        </div>

        <div className="basis-0 bg-[#121212] flex flex-row grow h-full items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
          <div className="basis-0 flex flex-col grow h-full items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
            
            {/* Top Header */}
            <div className="bg-[#121212] flex flex-row items-center justify-between min-h-14 p-0 relative shrink-0 w-full">
              <div className="flex flex-row items-center">
                 <div className="flex flex-row gap-2.5 items-center justify-start p-2 relative shrink-0">
                  <IconButton>
                    <ChevronLeftIcon className="w-4 h-4 text-gray-400" />
                  </IconButton>
                </div>
                <div className="flex flex-row gap-2.5 items-center justify-start p-2 relative shrink-0">
                  <IconButton>
                    <ChevronRightIcon className="w-4 h-4 text-gray-400" />
                  </IconButton>
                </div>
              </div>

              <div className="flex flex-row gap-2 items-center justify-end p-2 relative shrink-0 mr-4">
                <IconButton>
                  <ViewIcon className="w-4 h-4 text-gray-400" />
                </IconButton>
                <IconButton className="bg-[rgba(233,234,236,0.08)]">
                  <AIIcon className="w-4 h-4 text-fly-accent-10" />
                </IconButton>
                <IconButton>
                  <BellIcon className="w-4 h-4 text-gray-400" />
                </IconButton>
                <div className="bg-[rgba(47,130,255,0.24)] w-8 h-8 rounded-full flex items-center justify-center">
                  <span className="text-[#d6e6ff] text-xs font-medium">S</span>
                </div>
              </div>
            </div>
            
            {/* Main Content Area */}
            <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full flex flex-row p-4 pt-0">
              <div className="basis-0 bg-[#1c1c1c] flex flex-col grow h-full items-start justify-start min-h-px min-w-px relative rounded-xl shrink-0 overflow-hidden">

                {/* Breadcrumb & Tabs */}
                <div className="w-full border-b border-[#2a2a2a] px-6 py-4">
                  <div className="text-sm font-medium mb-4">Fly Registry / {selectedOrg}</div>
                  <div className="flex flex-row gap-6">
                    <button
                      onClick={() => handleTabChange('repos')}
                      className={`text-xs font-medium pb-2 relative ${activeTab === 'repos' ? 'text-fly-accent-10 border-b-2 border-fly-accent-10' : 'text-gray-400'}`}
                    >
                      Git Repos
                    </button>
                    <button
                      onClick={() => handleTabChange('artifacts')}
                      className={`text-xs font-medium pb-2 relative ${activeTab === 'artifacts' ? 'text-fly-accent-10 border-b-2 border-fly-accent-10' : 'text-gray-400'}`}
                    >
                      All Artifacts
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full flex flex-row grow overflow-hidden">
                  <div className="flex-grow flex flex-col p-6 overflow-y-auto">

                    {/* Controls */}
                    <div className="flex flex-row justify-between items-center mb-6">
                      <div className="flex flex-row gap-3 items-center">
                        <div className="relative" ref={dropdownRef}>
                          <button
                            onClick={toggleOrgDropdown}
                            className="bg-fly-gray-2 border border-fly-gray-4 h-8 px-3 rounded-lg flex flex-row items-center gap-2 text-xs"
                          >
                            <GitHubIcon className="w-4 h-4 text-gray-400" />
                            <span>{selectedOrg}</span>
                            <ChevronDownIcon className="w-4 h-4 text-gray-400" />
                          </button>
                          {showOrgDropdown && (
                            <div className="absolute top-full left-0 mt-1 bg-fly-gray-1 border border-fly-gray-4 rounded-lg shadow-xl z-20 w-40 overflow-hidden">
                              {['jfrog-dev', 'another-org', 'test-org'].map(org => (
                                <button
                                  key={org}
                                  onClick={() => { setSelectedOrg(org); setShowOrgDropdown(false); }}
                                  className="w-full px-4 py-2 text-left text-xs hover:bg-fly-gray-2"
                                >
                                  {org}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                        <button 
                          onClick={handleSync}
                          className="flex flex-row items-center gap-2 text-xs text-fly-neutral-11 hover:text-white"
                        >
                          <SyncIcon className="w-4 h-4" />
                          <span>Sync</span>
                        </button>
                      </div>

                      <div className="flex flex-row gap-2 items-center">
                        <div className="bg-fly-gray-0 border border-fly-gray-4 rounded-lg flex flex-row items-center px-2 h-8">
                          <SearchIcon className="w-4 h-4 text-gray-500 mr-2" />
                          <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent border-none outline-none text-xs w-48"
                            value={searchQuery}
                            onChange={handleSearch}
                          />
                        </div>
                        <IconButton><FilterIcon className="w-4 h-4 text-gray-400" /></IconButton>
                        <div className="flex bg-fly-gray-2 rounded-lg p-0.5">
                          <button onClick={() => setViewMode('grid')} className={`p-1.5 rounded-md ${viewMode === 'grid' ? 'bg-fly-gray-4' : ''}`}><GridIcon className="w-4 h-4" /></button>
                          <button onClick={() => setViewMode('table')} className={`p-1.5 rounded-md ${viewMode === 'table' ? 'bg-fly-gray-4' : ''}`}><TableIcon className="w-4 h-4" /></button>
                        </div>
                      </div>
                    </div>

                    {/* Dynamic List */}
                    {activeTab === 'repos' ? (
                      <div className="border border-fly-gray-4 rounded-xl overflow-hidden bg-fly-gray-3">
                        <div className="flex flex-row bg-fly-gray-2 p-3 text-[10px] uppercase tracking-wider text-gray-500 font-bold border-b border-fly-gray-4">
                          <div className="flex-grow flex items-center gap-1">
                            <GitHubIcon className="w-3 h-3" />
                            <span>{filteredRepos.length} Repositories</span>
                            <DotIcon className="w-2 h-2 mx-1" />
                            <span>{filteredRepos.reduce((acc, r) => acc + r.artifacts, 0)} Artifacts</span>
                          </div>
                        </div>
                        {filteredRepos.length > 0 ? filteredRepos.map((repo, i) => (
                          <div key={repo.name} className={`flex flex-row items-center p-4 hover:bg-white/5 transition-colors ${i < filteredRepos.length - 1 ? 'border-b border-fly-gray-4' : ''}`}>
                            <div className="flex-grow">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs font-semibold">{repo.name}</span>
                                {repo.notConfigured && <span className="text-[10px] bg-fly-error-alpha text-fly-error-text px-1.5 py-0.5 rounded">Not Configured</span>}
                              </div>
                              <div className="flex items-center text-[10px] text-gray-400 gap-2">
                                <span className="flex items-center gap-1"><ArtifactIcon className="w-3 h-3" /> {repo.artifacts}</span>
                                <DotIcon className="w-1 h-1" />
                                <span>Updated {repo.updated}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              {repo.notConfigured && <button onClick={() => handleConfigure(repo.name)} className="text-[10px] font-bold bg-fly-gray-4 px-3 py-1 rounded-md">Configure</button>}
                              <IconButton><MoreVertIcon className="w-4 h-4 text-gray-500" /></IconButton>
                            </div>
                          </div>
                        )) : (
                          <div className="p-8 text-center text-xs text-gray-500">No repositories found matching your search.</div>
                        )}
                      </div>
                    ) : (
                      <div className="border border-fly-gray-4 rounded-xl overflow-hidden bg-fly-gray-3">
                         <div className="flex flex-row bg-fly-gray-2 p-3 text-[10px] uppercase tracking-wider text-gray-500 font-bold border-b border-fly-gray-4">
                          <div className="flex-grow flex items-center gap-1">
                            <ArchiveIcon className="w-3 h-3" />
                            <span>{filteredArtifacts.length} Artifacts</span>
                            <DotIcon className="w-2 h-2 mx-1" />
                            <span>3 Package Types</span>
                          </div>
                        </div>
                        {filteredArtifacts.length > 0 ? filteredArtifacts.map((art, i) => (
                          <div key={art.name} className={`flex flex-row items-center p-4 hover:bg-white/5 transition-colors ${i < filteredArtifacts.length - 1 ? 'border-b border-fly-gray-4' : ''}`}>
                            <div className="flex-grow">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs font-semibold">{art.name}</span>
                                <span className="text-[10px] bg-fly-gray-4 px-1.5 py-0.5 rounded">{art.versions}</span>
                              </div>
                              <div className="flex items-center text-[10px] text-gray-400 gap-2">
                                <span className="flex items-center gap-1">
                                  {art.type === 'Docker' && <DockerIcon className="w-3 h-3" />}
                                  {art.type === 'NPM' && <NpmIcon className="w-3 h-3" />}
                                  {art.type === 'Go' && <GoIcon className="w-3 h-3" />}
                                  {art.type}
                                </span>
                                <DotIcon className="w-1 h-1" />
                                <span>{art.size}</span>
                                <DotIcon className="w-1 h-1" />
                                <span>Updated {art.updated}</span>
                              </div>
                            </div>
                            <IconButton><MoreVertIcon className="w-4 h-4 text-gray-500" /></IconButton>
                          </div>
                        )) : (
                          <div className="p-8 text-center text-xs text-gray-500">No artifacts found matching your search.</div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Right Panel: Insights */}
                  <div className="w-72 border-l border-[#2a2a2a] flex flex-col p-6 overflow-y-auto bg-fly-gray-3">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Insights</div>

                    <div className="mb-8">
                      <div className="text-xs font-semibold mb-4 text-gray-300">Safety Status</div>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <CheckCircleIcon className="w-4 h-4 text-green-500" />
                          <span className="text-[11px] text-gray-300">4/6 cit repo(s) connected</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <ViewIcon className="w-4 h-4 text-gray-500" />
                          <span className="text-[11px] text-gray-300">12/15 users connected</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <SkullIcon className="w-4 h-4 text-gray-500" />
                          <span className="text-[11px] text-gray-300">Malicious Packages (None Found)</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircleIcon className="w-4 h-4 text-green-500" />
                          <span className="text-[11px] text-gray-300">84 dependencies (Scanned)</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <div className="text-xs font-semibold mb-4 text-gray-300">Latest Activity</div>
                      <div className="flex items-start gap-3 mb-4">
                        <div className="mt-0.5"><DockerIcon className="w-4 h-4 text-gray-500" /></div>
                        <div className="flex-grow">
                          <div className="text-[11px] font-medium">dashboard-ui:latest</div>
                          <div className="text-[10px] text-gray-500">Pushed 2 hours ago</div>
                        </div>
                      </div>
                      <button className="text-fly-accent-10 text-[10px] font-semibold">Show More</button>
                    </div>

                    <div className="mb-8">
                      <div className="text-xs font-semibold mb-4 text-gray-300">Package Managers</div>
                      <div className="flex -space-x-2">
                        {[DockerIcon, NpmIcon, GoIcon, MavenIcon].map((Icon, i) => (
                          <div key={i} className="w-7 h-7 rounded-full bg-fly-gray-2 border-2 border-fly-gray-3 flex items-center justify-center">
                            <Icon className="w-3.5 h-3.5 text-gray-400" />
                          </div>
                        ))}
                        <div className="w-7 h-7 rounded-full bg-fly-gray-4 border-2 border-fly-gray-3 flex items-center justify-center text-[8px] font-bold">9+</div>
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-semibold mb-4 text-gray-300">Other</div>
                      <div className="flex items-center gap-3">
                        <GitHubIcon className="w-4 h-4 text-gray-500" />
                        <span className="text-[11px] text-gray-300">2 git repo(s) ignored</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Panel */}
              <div
                ref={chatPanelRef}
                className="bg-[#1c1c1c] flex flex-col h-full ml-4 rounded-xl overflow-hidden border border-[#2a2a2a] relative"
                style={{ width: `${chatWidth}px` }}
              >
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-fly-accent-10 transition-colors z-30"
                  onMouseDown={handleDragStart}
                />

                {/* Chat Header */}
                <div className="p-4 border-b border-[#2a2a2a] flex items-center justify-between bg-fly-gray-3">
                  <span className="text-sm font-semibold">Chat with Fly</span>
                  <div className="flex gap-1">
                    <IconButton><PlusIcon className="w-4 h-4 text-gray-400" /></IconButton>
                    <IconButton onClick={() => setChatHistory([{ role: 'assistant', content: 'Chat reset. How can I help?' }])}><RefreshIcon className="w-4 h-4 text-gray-400" /></IconButton>
                    <IconButton><CloseIcon className="w-4 h-4 text-gray-400" /></IconButton>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-grow overflow-y-auto p-4 space-y-4">
                  {chatHistory.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[85%] p-3 rounded-2xl text-xs ${msg.role === 'user' ? 'bg-fly-accent-9 text-white rounded-br-none' : 'bg-fly-gray-2 text-gray-200 rounded-bl-none'}`}>
                        {msg.content}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer / Input */}
                <div className="p-4 bg-fly-gray-3 border-t border-[#2a2a2a]">
                  <div className="mb-3">
                    <div className="text-[10px] text-gray-500 font-bold uppercase mb-2">Suggestions</div>
                    <div className="space-y-1">
                      {["How many artifacts are in frontend-dashboard?", "Show latest activity", "Identify malicious packages"].map(s => (
                        <button
                          key={s}
                          onClick={() => setChatMessage(s)}
                          className="flex items-center gap-2 text-[10px] text-gray-400 hover:text-white transition-colors"
                        >
                          <ArrowTopRightIcon className="w-3 h-3" />
                          <span>{s}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <form onSubmit={handleChatSubmit} className="relative">
                    <input
                      type="text"
                      placeholder="Ask Fly..."
                      className="w-full bg-fly-gray-0 border border-fly-gray-4 rounded-xl py-2 pl-3 pr-10 text-xs outline-none focus:border-fly-accent-10"
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="absolute right-2 top-1.5 p-1 rounded-md bg-fly-accent-9 hover:bg-fly-accent-10 transition-colors"
                    >
                      <SendIcon className="w-3.5 h-3.5 text-white" />
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registry
