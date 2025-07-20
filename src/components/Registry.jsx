import React, { useState } from 'react'
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
  const [selectedOrg, setSelectedOrg] = useState('{git org}')
  const [showSuggestions, setShowSuggestions] = useState(true)
  const [activeTab, setActiveTab] = useState('repos') // 'repos' or 'artifacts'

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleChatSubmit = (e) => {
    e.preventDefault()
    if (chatMessage.trim()) {
      console.log('Chat message:', chatMessage)
      setChatMessage('')
    }
  }

  const handleSync = () => {
    console.log('Syncing repositories...')
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

  return (
    <div className="bg-[#121212] flex flex-row gap-2.5 items-center justify-start p-0 relative w-full h-screen">
      <div className="basis-0 bg-[#1c1c1c] flex flex-row grow h-full items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
        <div className="absolute border border-[#000000] border-solid inset-[-1px] pointer-events-none"/>
        <div className="basis-0 bg-[#121212] flex flex-row grow h-full items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
          <div className="basis-0 flex flex-col grow h-full items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
            
            {/* Top Header */}
            <div className="bg-[#121212] flex flex-row items-center justify-end min-h-14 p-0 relative shrink-0 w-full">
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
              <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                <div className="flex flex-row items-center relative size-full">
                  <div className="flex flex-row items-center justify-start pl-0 pr-4 py-2 relative w-full">
                    <div className="basis-0 flex flex-row gap-2 grow items-center justify-end min-h-px min-w-px p-0 relative shrink-0">
                      <IconButton>
                        <ViewIcon className="w-4 h-4 text-gray-400" />
                      </IconButton>
                      <IconButton className="bg-[rgba(233,234,236,0.08)]">
                        <AIIcon className="w-4 h-4 text-gray-300" />
                      </IconButton>
                      <IconButton>
                        <BellIcon className="w-4 h-4 text-gray-400" />
                      </IconButton>
                      <div className="bg-[rgba(47,130,255,0.24)] w-8 h-8 rounded-full flex items-center justify-center">
                        <span className="text-[#d6e6ff] text-xs font-medium">S</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
              <div className="relative size-full">
                <div className="flex flex-row-reverse items-start justify-start pb-3 pl-0 pr-4 pt-0 relative size-full">
                  
                  {/* Sidebar */}
                  <div className="flex flex-row h-full items-center justify-start order-2 p-0 relative shrink-0">
                    <div className="bg-[#121212] flex flex-col h-full items-center justify-start max-w-[88px] pb-4 pt-0 px-0 relative shrink-0">
                      <div className="basis-0 flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
                        <button 
                          onClick={() => handleTabChange('repos')}
                          className={`flex flex-col gap-0.5 items-center justify-center min-h-14 min-w-14 px-1 py-2 relative shrink-0 transition-opacity ${activeTab === 'repos' ? 'opacity-100' : 'opacity-60 hover:opacity-80'}`}
                        >
                          <div className={`flex flex-row gap-2 items-center justify-center p-0 relative rounded-full w-8 h-8 ${activeTab === 'repos' ? 'bg-[#292929] border border-[#474747]' : ''}`}>
                            <RepositoryIcon className={`w-4 h-4 ${activeTab === 'repos' ? 'text-gray-300' : 'text-gray-400'}`} />
                          </div>
                        </button>
                        <button 
                          onClick={() => handleTabChange('artifacts')}
                          className={`flex flex-col gap-0.5 items-center justify-center min-h-14 min-w-14 px-1 py-2 relative shrink-0 transition-opacity ${activeTab === 'artifacts' ? 'opacity-100' : 'opacity-60 hover:opacity-80'}`}
                        >
                          <div className={`flex flex-row gap-2 items-center justify-center p-2 relative rounded-full w-8 h-8 ${activeTab === 'artifacts' ? 'bg-[#292929] border border-[#474747]' : ''}`}>
                            <ArtifactIcon className={`w-4 h-4 ${activeTab === 'artifacts' ? 'text-gray-300' : 'text-gray-400'}`} />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Main Content Area */}
                  <div className="basis-0 flex flex-row-reverse gap-3 grow h-full items-center justify-start min-h-px min-w-px order-1 p-0 relative shrink-0">
                   
                    {/* Main Content Card */}
                    <div className="basis-0 bg-[#1c1c1c] flex flex-col gap-12 grow h-full items-center justify-start min-h-px min-w-px order-2 p-0 relative rounded-xl shrink-0">
                      <div className="basis-0 flex flex-col-reverse gap-12 grow items-center justify-start min-h-px min-w-px overflow-hidden p-0 relative rounded-tl-6 shrink-0 w-full">
                        <div className="basis-0 flex flex-col grow items-start justify-start min-h-px min-w-px order-1 overflow-hidden p-0 relative shrink-0 w-full">
                          <div className="basis-0 flex flex-col gap-3 grow items-start justify-start min-h-px min-w-px overflow-hidden p-0 relative shrink-0 w-full">
                            
                            {/* Breadcrumb */}
                            <div className="flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                              <div className="relative shrink-0 w-full">
                                <div className="flex flex-row items-center relative size-full">
                                  <div className="flex flex-row gap-10 items-center justify-start pb-3 pt-6 px-4 relative w-full">
                                    <div className="flex gap-2 h-6 items-center justify-start p-0 relative shrink-0 w-[508px]">
                                      <div className="flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
                                        <div className="flex flex-row gap-0.5 h-6 items-center justify-center p-0 relative rounded w-[50px]">
                                          <div className="bg-[#292929] flex flex-row gap-1 items-center justify-center px-1 py-0 relative w-6 h-6 rounded-bl rounded-tl">
                                            <ChevronLeftIcon className="w-3 h-3 text-gray-400 opacity-56" />
                                          </div>
                                          <div className="bg-[#292929] flex flex-row gap-1 items-center justify-center px-1 py-0 relative w-6 h-6 rounded-br rounded-tr">
                                            <ChevronRightIcon className="w-3 h-3 text-gray-400 opacity-56" />
                                          </div>
                                        </div>
                                        <div className="flex flex-row gap-1 items-center justify-start p-0 relative">
                                          <div className="opacity-70 p-0 relative">
                                            <div className="text-[#eeeef0] text-sm">{`{team name} Registry`}</div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Tabs */}
                              <div className="h-10 relative shrink-0 w-full">
                                <div className="absolute border-b border-[rgba(232,234,235,0.19)] bottom-0 left-0 right-0 top-0"></div>
                                <div className="flex flex-col items-end relative h-full">
                                  <div className="flex flex-col h-10 items-end justify-start px-4 py-0 relative w-full">
                                    <div className="flex flex-row items-end justify-start p-0 relative shrink-0 w-full">
                                      <div className="flex flex-row h-10 items-start justify-start overflow-hidden p-0 relative shrink-0">
                                        <div className="absolute bg-[rgba(232,234,235,0.19)] bottom-0 h-px left-0 right-0"></div>
                                        <div className="flex flex-row h-full items-center justify-start p-0 relative shrink-0">
                                          <button 
                                            onClick={() => handleTabChange('repos')}
                                            className={`flex flex-row h-full items-center justify-center overflow-hidden px-2 py-0 relative shrink-0 cursor-pointer hover:bg-[rgba(255,255,255,0.05)] transition-colors ${activeTab === 'repos' ? 'bg-[rgba(255,255,255,0.05)]' : ''}`}
                                          >
                                            {activeTab === 'repos' && (
                                              <div className="absolute bg-[#548ee4] bottom-0 h-0.5 left-0 right-0"></div>
                                            )}
                                            <div className="flex flex-row gap-2 h-7 items-center justify-center p-2 relative rounded-lg">
                                              <RepositoryIcon className={`w-4 h-4 ${activeTab === 'repos' ? 'text-[#edeef0]' : 'text-[rgba(247,247,248,0.71)]'}`} />
                                              <div className={`text-xs font-medium ${activeTab === 'repos' ? 'text-[#edeef0]' : 'text-[rgba(247,247,248,0.71)]'}`}>Git Repos</div>
                                            </div>
                                          </button>
                                          <button 
                                            onClick={() => handleTabChange('artifacts')}
                                            className={`flex flex-row h-full items-center justify-center overflow-hidden px-2 py-0 relative shrink-0 cursor-pointer hover:bg-[rgba(255,255,255,0.05)] transition-colors ${activeTab === 'artifacts' ? 'bg-[rgba(255,255,255,0.05)]' : ''}`}
                                          >
                                            {activeTab === 'artifacts' && (
                                              <div className="absolute bg-[#548ee4] bottom-0 h-0.5 left-0 right-0"></div>
                                            )}
                                            <div className="flex flex-row gap-2 h-7 items-center justify-center p-2 relative rounded-lg">
                                              <ArchiveIcon className={`w-4 h-4 ${activeTab === 'artifacts' ? 'text-[#edeef0]' : 'text-[rgba(247,247,248,0.71)]'}`} />
                                              <div className={`text-xs ${activeTab === 'artifacts' ? 'text-[#edeef0] font-medium' : 'text-[rgba(247,247,248,0.71)]'}`}>All Artifacts</div>
                                            </div>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Content Area */}
                            <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
                              <div className="relative size-full">
                                <div className="flex gap-10 items-start justify-start pb-4 pt-3 px-6 relative size-full">
                                  
                                  {/* Main Table Area */}
                                  {activeTab === 'repos' && (
                                  <div className="basis-0 flex gap-4 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
                                    <div className="basis-0 flex gap-4 grow items-start justify-start min-h-px min-w-[312px] overflow-hidden p-0 relative shrink-0">
                                      <div className="basis-0 flex flex-col gap-4 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
                                        
                                        {/* Search and Filters */}
                                        <div className="flex flex-row gap-10 items-center justify-start min-h-14 px-0 py-2 relative shrink-0 w-full">
                                          <div className="absolute border-b border-[#474747] inset-0 pointer-events-none"></div>
                                          <div className="flex gap-3 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
                                            <div className="flex flex-row gap-1 items-center justify-start min-w-[238px] p-0 relative shrink-0">
                                              <div className="bg-[rgba(231,231,231,0.04)] h-8 relative rounded-lg shrink-0 w-40">
                                                <div className="flex flex-row items-center overflow-hidden relative size-full">
                                                  <div className="flex flex-row gap-2 h-8 items-center justify-start px-3 py-0 relative w-full">
                                                    <GitHubIcon className="w-4 h-4 text-gray-400" />
                                                    <div className="grow text-[rgba(241,241,241,0.48)] text-xs">{`{git org}`}</div>
                                                    <ChevronDownIcon className="w-4 h-4 text-gray-400" />
                                                  </div>
                                                </div>
                                                <div className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none rounded-lg"></div>
                                              </div>
                                              <button 
                                                onClick={handleSync}
                                                className="flex flex-row gap-2 h-8 items-center justify-center px-3 py-0 relative rounded-lg shrink-0 hover:bg-[rgba(255,255,255,0.08)] transition-colors"
                                              >
                                                <SyncIcon className="w-4 h-4 text-[#b5b5b5]" />
                                                <div className="text-[#b5b5b5] text-xs">Sync</div>
                                              </button>
                                            </div>
                                            <div className="basis-0 flex flex-row gap-2 grow items-center justify-end min-h-8 min-w-[132px] p-0 relative shrink-0">
                                              <div className="basis-0 bg-[rgba(255,255,255,0)] flex flex-col gap-2 grow items-start justify-start max-w-[300px] min-h-px min-w-[124px] p-0 relative shrink-0">
                                                <div className="bg-[rgba(0,0,0,0.25)] h-8 relative rounded-xl shrink-0 w-full">
                                                  <div className="absolute border border-[rgba(235,235,235,0.02)] border-solid inset-0 pointer-events-none rounded-xl"></div>
                                                  <div className="flex flex-row items-center relative size-full">
                                                    <div className="flex flex-row h-8 items-center justify-start px-1 py-0 relative w-full">
                                                      <div className="flex flex-row gap-2 h-full items-center justify-center px-1 py-0 relative shrink-0">
                                                        <SearchIcon className="w-4 h-4 text-gray-400" />
                                                      </div>
                                                      <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
                                                        <div className="flex flex-row items-center relative size-full">
                                                          <div className="flex flex-row gap-1 items-center justify-start px-1 py-0 relative size-full">
                                                            <input
                                                              type="text"
                                                              value={searchQuery}
                                                              onChange={handleSearch}
                                                              placeholder="Search...."
                                                              className="grow bg-transparent text-[rgba(238,238,238,0.43)] text-xs placeholder-[rgba(238,238,238,0.43)] focus:outline-none focus:text-white"
                                                            />
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <IconButton>
                                                <FilterIcon className="w-4 h-4 text-gray-400" />
                                              </IconButton>
                                            </div>
                                          </div>
                                        </div>

                                        {/* Table */}
                                        <div className="flex flex-col gap-10 items-start justify-start min-w-64 p-0 relative shrink-0 w-full">
                                          <div className="relative rounded-lg shrink-0 w-full border border-[#474747] overflow-hidden">
                                            <div className="flex flex-col items-center justify-start overflow-hidden p-0 relative w-full">
                                              {/* Table Header */}
                                              <div className="flex flex-row items-center justify-start p-0 relative shrink-0 w-full bg-[#232323] border-b border-[#474747]">
                                                <div className="basis-0 grow min-h-12 min-w-px relative shrink-0">
                                                  <div className="flex flex-row items-center min-h-inherit relative size-full">
                                                    <div className="flex gap-1 items-center justify-start min-h-inherit px-4 py-3 relative w-full">
                                                      <div className="basis-0 flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
                                                        <div className="flex gap-1 items-center justify-start opacity-72 p-0 relative shrink-0 w-full">
                                                          <div className="flex flex-row gap-0.5 items-center justify-center p-0 relative shrink-0">
                                                            <GitHubIcon className="w-3 h-3 text-gray-600" />
                                                            <div className="text-[#eeeef0] text-xs">{`{no} Repositories`}</div>
                                                          </div>
                                                          <div className="relative shrink-0 w-[9px] h-[9px]">
                                                            <DotIcon className="w-full h-full text-gray-400" />
                                                          </div>
                                                          <div className="flex flex-row gap-0.5 items-center justify-center p-0 relative shrink-0">
                                                            <div className="text-[rgba(247,247,247,0.71)] text-xs">{`{no} Artifacts`}</div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="basis-0 grow min-h-12 min-w-px relative shrink-0">
                                                  <div className="flex flex-row items-center min-h-inherit relative size-full">
                                                    <div className="flex gap-1 items-center justify-start min-h-inherit px-4 py-3 relative w-full">
                                                      <div className="basis-0 flex flex-col gap-1 grow items-end justify-center min-h-px min-w-px p-0 relative shrink-0">
                                                        <div className="flex gap-1 items-center justify-end opacity-72 p-0 relative shrink-0 w-full">
                                                          <IconButton 
                                                            onClick={toggleViewMode}
                                                            className={viewMode === 'grid' ? "bg-[rgba(229,229,229,0.11)] opacity-82" : ""}
                                                          >
                                                            <GridIcon className="w-4 h-4 text-gray-300" />
                                                          </IconButton>
                                                          <IconButton 
                                                            onClick={toggleViewMode}
                                                            className={viewMode === 'table' ? "bg-[rgba(229,229,229,0.11)] opacity-82" : ""}
                                                          >
                                                            <TableIcon className="w-4 h-4 text-gray-400" />
                                                          </IconButton>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              
                                              {/* Table Rows */}
                                              <div className="flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                                                {[
                                                  { name: "frontend-app", artifacts: 12, updated: "Updated 1 min ago" },
                                                  { name: "backend-api", artifacts: 8, updated: "Updated 3 days ago" },
                                                  { name: "mobile-app", artifacts: 15, updated: "Updated 3 days ago" },
                                                  { name: "auth-service", artifacts: 0, updated: "No data found", notConfigured: true }
                                                ].map((repo, index) => (
                                                  <div key={index} className="flex flex-row items-center justify-start p-0 relative shrink-0 w-full hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                                                    {index > 0 && (
                                                      <div className="absolute border-t border-[#474747] top-0 left-0 right-0 pointer-events-none"/>
                                                    )}
                                                    <div className="basis-0 grow min-h-9 min-w-px relative shrink-0">
                                                      <div className="flex flex-row items-center min-h-inherit relative size-full">
                                                        <div className="flex gap-1 items-center justify-start min-h-inherit px-4 py-2 relative w-full">
                                                          <div className="basis-0 flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
                                                            <div className="flex gap-1 items-center justify-start min-h-6 p-0 relative shrink-0 w-full">
                                                              <div className="flex flex-row gap-0.5 items-center justify-center p-0 relative shrink-0">
                                                                <div className="text-[#eeeef0] text-xs font-medium">{repo.name}</div>
                                                              </div>
                                                              {repo.notConfigured && (
                                                                <div className="bg-[rgba(255,23,63,0.18)] flex flex-row gap-1.5 items-center justify-center px-1.5 py-0.5 relative rounded-lg shrink-0">
                                                                  <div className="text-[#ff9592] text-xs font-medium">Not Configured</div>
                                                                </div>
                                                              )}
                                                            </div>
                                                            <div className="flex gap-1 items-center justify-start opacity-72 p-0 relative shrink-0 w-full">
                                                              <div className="flex flex-row gap-0.5 items-center justify-center p-0 relative shrink-0">
                                                                <ArtifactIcon className="w-3 h-3 text-gray-600" />
                                                                <div className="text-[#eeeef0] text-xs">{repo.artifacts}</div>
                                                              </div>
                                                              <div className="relative shrink-0 w-[9px] h-[9px]">
                                                                <DotIcon className="w-full h-full text-gray-400" />
                                                              </div>
                                                              <div className="flex flex-row gap-0.5 items-center justify-center p-0 relative shrink-0">
                                                                <div className="text-[#eeeef0] text-xs">{repo.updated}</div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="basis-0 grow min-h-9 min-w-px relative shrink-0">
                                                      <div className="flex flex-row items-center min-h-inherit relative size-full">
                                                        <div className="flex gap-1 items-center justify-start min-h-inherit px-4 py-2 relative w-full">
                                                          <div className="basis-0 flex flex-col gap-1 grow items-end justify-center min-h-px min-w-px p-0 relative shrink-0">
                                                            <div className="flex gap-1 items-center justify-end min-h-6 p-0 relative shrink-0 w-full">
                                                              {repo.notConfigured && (
                                                                <button 
                                                                  onClick={() => handleConfigure(repo.name)}
                                                                  className="bg-[rgba(235,235,235,0.08)] flex flex-row gap-1 h-6 items-center justify-center px-2 py-0 relative rounded-lg shrink-0 hover:bg-[rgba(235,235,235,0.12)] transition-colors"
                                                                >
                                                                  <div className="text-[#b5b5b5] text-xs font-medium">Configure</div>
                                                                </button>
                                                              )}
                                                              <IconButton className="hover:bg-[rgba(255,255,255,0.08)]">
                                                                <MoreVertIcon className="w-4 h-4 text-gray-400" />
                                                              </IconButton>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                ))}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  )}
                                  
                                  {/* All Artifacts Tab Content */}
                                  {activeTab === 'artifacts' && (
                                    <div className="basis-0 flex gap-4 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
                                      <div className="basis-0 flex gap-4 grow items-start justify-start min-h-px min-w-[312px] overflow-hidden p-0 relative shrink-0">
                                        <div className="basis-0 flex flex-col gap-4 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
                                          
                                          {/* Artifacts Search and Filters */}
                                          <div className="flex flex-row gap-10 items-center justify-start min-h-14 px-0 py-2 relative shrink-0 w-full">
                                            <div className="absolute border-b border-[#474747] inset-0 pointer-events-none"></div>
                                            <div className="flex gap-3 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
                                              <div className="basis-0 flex flex-row gap-2 grow items-center justify-end min-h-8 min-w-[132px] p-0 relative shrink-0">
                                                <div className="basis-0 bg-[rgba(255,255,255,0)] flex flex-col gap-2 grow items-start justify-start max-w-[300px] min-h-px min-w-[124px] p-0 relative shrink-0">
                                                  <div className="bg-[rgba(0,0,0,0.25)] h-8 relative rounded-xl shrink-0 w-full">
                                                    <div className="absolute border border-[rgba(235,235,235,0.02)] border-solid inset-0 pointer-events-none rounded-xl"></div>
                                                    <div className="flex flex-row items-center relative size-full">
                                                      <div className="flex flex-row h-8 items-center justify-start px-1 py-0 relative w-full">
                                                        <div className="flex flex-row gap-2 h-full items-center justify-center px-1 py-0 relative shrink-0">
                                                          <SearchIcon className="w-4 h-4 text-gray-400" />
                                                        </div>
                                                        <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
                                                          <div className="flex flex-row items-center relative size-full">
                                                            <div className="flex flex-row gap-1 items-center justify-start px-1 py-0 relative size-full">
                                                              <input
                                                                type="text"
                                                                value={searchQuery}
                                                                onChange={handleSearch}
                                                                placeholder="Search artifacts..."
                                                                className="grow bg-transparent text-[rgba(238,238,238,0.43)] text-xs placeholder-[rgba(238,238,238,0.43)] focus:outline-none focus:text-white"
                                                              />
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <IconButton>
                                                  <FilterIcon className="w-4 h-4 text-gray-400" />
                                                </IconButton>
                                              </div>
                                            </div>
                                          </div>

                                          {/* Artifacts Table */}
                                          <div className="flex flex-col gap-10 items-start justify-start min-w-64 p-0 relative shrink-0 w-full">
                                            <div className="relative rounded-lg shrink-0 w-full border border-[#474747] overflow-hidden">
                                              <div className="flex flex-col items-center justify-start overflow-hidden p-0 relative w-full">
                                                {/* Artifacts Table Header */}
                                                <div className="flex flex-row items-center justify-start p-0 relative shrink-0 w-full bg-[#232323] border-b border-[#474747]">
                                                  <div className="basis-0 grow min-h-12 min-w-px relative shrink-0">
                                                    <div className="flex flex-row items-center min-h-inherit relative size-full">
                                                      <div className="flex gap-1 items-center justify-start min-h-inherit px-4 py-3 relative w-full">
                                                        <div className="basis-0 flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
                                                          <div className="flex gap-1 items-center justify-start opacity-72 p-0 relative shrink-0 w-full">
                                                            <div className="flex flex-row gap-0.5 items-center justify-center p-0 relative shrink-0">
                                                              <ArchiveIcon className="w-3 h-3 text-gray-600" />
                                                              <div className="text-[#eeeef0] text-xs">{`{no} Artifacts`}</div>
                                                            </div>
                                                            <div className="relative shrink-0 w-[9px] h-[9px]">
                                                              <DotIcon className="w-full h-full text-gray-400" />
                                                            </div>
                                                            <div className="flex flex-row gap-0.5 items-center justify-center p-0 relative shrink-0">
                                                              <div className="text-[rgba(247,247,247,0.71)] text-xs">{`{no} Packages`}</div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="basis-0 grow min-h-12 min-w-px relative shrink-0">
                                                    <div className="flex flex-row items-center min-h-inherit relative size-full">
                                                      <div className="flex gap-1 items-center justify-start min-h-inherit px-4 py-3 relative w-full">
                                                        <div className="basis-0 flex flex-col gap-1 grow items-end justify-center min-h-px min-w-px p-0 relative shrink-0">
                                                          <div className="flex gap-1 items-center justify-end opacity-72 p-0 relative shrink-0 w-full">
                                                            <IconButton 
                                                              onClick={toggleViewMode}
                                                              className={viewMode === 'grid' ? "bg-[rgba(229,229,229,0.11)] opacity-82" : ""}
                                                            >
                                                              <GridIcon className="w-4 h-4 text-gray-300" />
                                                            </IconButton>
                                                            <IconButton 
                                                              onClick={toggleViewMode}
                                                              className={viewMode === 'table' ? "bg-[rgba(229,229,229,0.11)] opacity-82" : ""}
                                                            >
                                                              <TableIcon className="w-4 h-4 text-gray-400" />
                                                            </IconButton>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                
                                                {/* Artifacts Table Rows */}
                                                <div className="flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                                                  {[
                                                    { name: "frontend-app:latest", type: "Docker", size: "245MB", updated: "Updated 2 hours ago", status: "safe" },
                                                    { name: "backend-api:v1.2.3", type: "Docker", size: "189MB", updated: "Updated 1 day ago", status: "safe" },
                                                    { name: "react-components@2.1.0", type: "NPM", size: "45MB", updated: "Updated 3 days ago", status: "warning" },
                                                    { name: "auth-service:stable", type: "Docker", size: "156MB", updated: "Updated 1 week ago", status: "safe" },
                                                    { name: "go-module@v0.5.1", type: "Go", size: "12MB", updated: "Updated 2 weeks ago", status: "safe" }
                                                  ].map((artifact, index) => (
                                                    <div key={index} className="flex flex-row items-center justify-start p-0 relative shrink-0 w-full hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                                                      {index > 0 && (
                                                        <div className="absolute border-t border-[#474747] top-0 left-0 right-0 pointer-events-none"/>
                                                      )}
                                                      <div className="basis-0 grow min-h-9 min-w-px relative shrink-0">
                                                        <div className="flex flex-row items-center min-h-inherit relative size-full">
                                                          <div className="flex gap-1 items-center justify-start min-h-inherit px-4 py-2 relative w-full">
                                                            <div className="basis-0 flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
                                                              <div className="flex gap-1 items-center justify-start min-h-6 p-0 relative shrink-0 w-full">
                                                                <div className="flex flex-row gap-0.5 items-center justify-center p-0 relative shrink-0">
                                                                  <div className="text-[#eeeef0] text-xs font-medium">{artifact.name}</div>
                                                                </div>
                                                                <div className={`flex flex-row gap-1.5 items-center justify-center px-1.5 py-0.5 relative rounded-lg shrink-0 ${
                                                                  artifact.status === 'safe' ? 'bg-[rgba(34,197,94,0.18)]' : 'bg-[rgba(251,191,36,0.18)]'
                                                                }`}>
                                                                  <div className={`text-xs font-medium ${
                                                                    artifact.status === 'safe' ? 'text-[#86efac]' : 'text-[#fde047]'
                                                                  }`}>
                                                                    {artifact.status === 'safe' ? 'Safe' : 'Warning'}
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <div className="flex gap-1 items-center justify-start opacity-72 p-0 relative shrink-0 w-full">
                                                                <div className="flex flex-row gap-0.5 items-center justify-center p-0 relative shrink-0">
                                                                  {artifact.type === 'Docker' && <DockerIcon className="w-3 h-3 text-gray-600" />}
                                                                  {artifact.type === 'NPM' && <NpmIcon className="w-3 h-3 text-gray-600" />}
                                                                  {artifact.type === 'Go' && <GoIcon className="w-3 h-3 text-gray-600" />}
                                                                  <div className="text-[#eeeef0] text-xs">{artifact.type}</div>
                                                                </div>
                                                                <div className="relative shrink-0 w-[9px] h-[9px]">
                                                                  <DotIcon className="w-full h-full text-gray-400" />
                                                                </div>
                                                                <div className="flex flex-row gap-0.5 items-center justify-center p-0 relative shrink-0">
                                                                  <div className="text-[#eeeef0] text-xs">{artifact.size}</div>
                                                                </div>
                                                                <div className="relative shrink-0 w-[9px] h-[9px]">
                                                                  <DotIcon className="w-full h-full text-gray-400" />
                                                                </div>
                                                                <div className="flex flex-row gap-0.5 items-center justify-center p-0 relative shrink-0">
                                                                  <div className="text-[#eeeef0] text-xs">{artifact.updated}</div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="basis-0 grow min-h-9 min-w-px relative shrink-0">
                                                        <div className="flex flex-row items-center min-h-inherit relative size-full">
                                                          <div className="flex gap-1 items-center justify-start min-h-inherit px-4 py-2 relative w-full">
                                                            <div className="basis-0 flex flex-col gap-1 grow items-end justify-center min-h-px min-w-px p-0 relative shrink-0">
                                                              <div className="flex gap-1 items-center justify-end min-h-6 p-0 relative shrink-0 w-full">
                                                                <IconButton className="hover:bg-[rgba(255,255,255,0.08)]">
                                                                  <MoreVertIcon className="w-4 h-4 text-gray-400" />
                                                                </IconButton>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  ))}
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                  
                                  {/* Insights Panel */}
                                  <div className="flex flex-col items-start justify-start max-w-[272px] min-w-[272px] p-0 relative shrink-0">
                                    <div className="flex flex-row gap-10 items-center justify-start min-h-10 px-3 py-0 relative shrink-0 w-[272px]">
                                      <div className="basis-0 bg-[rgba(255,255,255,0)] grow min-h-px min-w-px relative shrink-0">
                                        <div className="relative size-full">
                                          <div className="flex flex-row items-start justify-start px-1 py-0 relative w-full">
                                            <div className="font-bold opacity-72 relative shrink-0 text-[#eeeef0] text-xs text-left text-nowrap">
                                              <p className="block leading-normal whitespace-pre">Insights</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="relative shrink-0 w-full">
                                      <div className="relative size-full">
                                        <div className="flex flex-col gap-3 items-start justify-start px-2 py-3 relative w-full">
                                          
                                          {/* Safety Status */}
                                          <div className="flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
                                            <div className="flex flex-row gap-4 items-center justify-start p-0 relative shrink-0 w-full">
                                              <div className="basis-0 flex flex-row gap-3 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
                                                <div className="basis-0 flex flex-col gap-2 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
                                                  <div className="relative shrink-0 w-full">
                                                    <div className="flex flex-row items-center relative size-full">
                                                      <div className="flex flex-row items-center justify-start pl-2 pr-0 py-0 relative w-full">
                                                        <div className="basis-0 flex flex-col font-semibold grow justify-center leading-0 min-h-px min-w-px opacity-64 relative shrink-0 text-[#ffffff] text-xs text-left">
                                                          <p className="block leading-normal">Safety Status</p>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
                                                    <div className="flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-full">
                                                      <div className="flex flex-row items-center justify-start max-w-64 min-w-[100px] p-0 relative shrink-0 w-full">
                                                        <div className="basis-0 flex flex-row gap-4 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
                                                          <div className="flex flex-row gap-1 h-6 items-center justify-start px-2 py-0 relative rounded-lg shrink-0">
                                                            <CheckCircleIcon className="w-4 h-4 text-green-400" />
                                                            <div className="text-[#efefef] text-xs">{`{no.}/{no.} cit repo(s) connected`}</div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="flex flex-row items-center justify-start max-w-64 min-w-[100px] p-0 relative shrink-0 w-full">
                                                        <div className="basis-0 flex flex-row gap-4 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
                                                          <div className="flex flex-row gap-1 h-6 items-center justify-start px-2 py-0 relative rounded-lg shrink-0">
                                                            <ViewIcon className="w-4 h-4 text-gray-600" />
                                                            <div className="text-[#efefef] text-xs">{`{no.}/{no.} users connected`}</div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="flex flex-row items-center justify-start max-w-64 min-w-[100px] p-0 relative shrink-0 w-full">
                                                        <div className="basis-0 flex flex-row gap-4 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
                                                          <div className="flex flex-row gap-1 h-6 items-center justify-start px-2 py-0 relative rounded-lg shrink-0">
                                                            <SkullIcon className="w-4 h-4 text-gray-600" />
                                                            <div className="text-[#efefef] text-xs">Malicious Packages (None Found)</div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="flex flex-row items-center justify-start max-w-64 min-w-[100px] p-0 relative shrink-0 w-full">
                                                        <div className="basis-0 flex flex-row gap-4 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
                                                          <div className="flex flex-row gap-1 h-6 items-center justify-start px-2 py-0 relative rounded-lg shrink-0">
                                                            <CheckCircleIcon className="w-4 h-4 text-green-400" />
                                                            <div className="text-[#efefef] text-xs">{`{no.} dependancies (Scanned)`}</div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="bg-[rgba(229,229,229,0.11)] grow h-px min-h-px min-w-px shrink-0"/>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          
                                          {/* Latest Activity */}
                                          <div className="flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
                                            <div className="flex flex-row gap-4 items-center justify-start p-0 relative shrink-0 w-full">
                                              <div className="basis-0 flex flex-row gap-3 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
                                                <div className="basis-0 flex flex-col gap-2 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
                                                  <div className="relative shrink-0 w-full">
                                                    <div className="flex flex-row items-center relative size-full">
                                                      <div className="flex flex-row items-center justify-start pl-2 pr-0 py-0 relative w-full">
                                                        <div className="basis-0 flex flex-col font-semibold grow justify-center leading-0 min-h-px min-w-px opacity-64 relative shrink-0 text-[#ffffff] text-xs text-left">
                                                          <p className="block leading-normal">Latest Activity</p>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
                                                    <div className="flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-full">
                                                      <div className="flex flex-row items-center justify-start max-w-64 min-w-[100px] p-0 relative shrink-0 w-full">
                                                        <div className="basis-0 flex flex-row gap-4 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
                                                          <div className="flex flex-row gap-1 h-6 items-center justify-start px-2 py-0 relative rounded-lg shrink-0">
                                                            <DockerIcon className="w-4 h-4 text-gray-600" />
                                                            <div className="text-[#efefef] text-xs">{`{artifact name}`}</div>
                                                          </div>
                                                          <div className="basis-0 flex flex-col font-normal grow justify-center leading-0 min-h-px min-w-px opacity-64 relative shrink-0 text-[#ffffff] text-xs text-right">
                                                            <p className="block leading-normal">{`{no.} days ago`}</p>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="flex flex-row items-center justify-start min-w-64 p-0 relative shrink-0 w-full">
                                                        <div className="flex flex-row gap-1 h-6 items-center justify-center px-2 py-0 relative rounded-lg shrink-0">
                                                          <div className="text-[#9ec5ff] text-xs">Show More</div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="bg-[rgba(229,229,229,0.11)] grow h-px min-h-px min-w-px shrink-0"/>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          
                                          {/* Package Managers */}
                                          <div className="flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
                                            <div className="flex flex-row gap-4 items-center justify-start p-0 relative shrink-0 w-full">
                                              <div className="basis-0 flex flex-row gap-3 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
                                                <div className="basis-0 flex flex-col gap-2 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
                                                  <div className="relative shrink-0 w-full">
                                                    <div className="flex flex-row items-center relative size-full">
                                                      <div className="flex flex-row items-center justify-start pl-2 pr-0 py-0 relative w-full">
                                                        <div className="basis-0 flex flex-col font-semibold grow justify-center leading-0 min-h-px min-w-px opacity-64 relative shrink-0 text-[#ffffff] text-xs text-left">
                                                          <p className="block leading-normal">Package Managers</p>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
                                                    <div className="flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-full">
                                                      <div className="relative shrink-0 w-full">
                                                        <div className="flex flex-row items-center relative size-full">
                                                          <div className="flex flex-row items-center justify-start px-2 py-0 relative w-full">
                                                            <div className="flex flex-row gap-4 items-center justify-start p-0 relative shrink-0">
                                                              <div className="flex flex-row items-center justify-start pl-0.5 pr-[3.5px] py-0 relative shrink-0">
                                                                {[DockerIcon, NpmIcon, GoIcon, MavenIcon].map((Icon, i) => (
                                                                  <div key={i} className="mr-[-1.5px] relative shrink-0 w-6 h-6">
                                                                    <div className="absolute inset-0">
                                                                      <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                                                                        <Icon className="w-4 h-4 text-gray-600" />
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                ))}
                                                                <div className="mr-[-1.5px] relative shrink-0 w-6 h-6">
                                                                  <div className="absolute inset-0">
                                                                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                                                                      <span className="text-[rgba(247,247,247,0.71)] text-xs font-medium">9+</span>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="bg-[rgba(229,229,229,0.11)] grow h-px min-h-px min-w-px shrink-0"/>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          
                                          {/* Other */}
                                          <div className="flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
                                            <div className="flex flex-row gap-4 items-center justify-start p-0 relative shrink-0 w-full">
                                              <div className="basis-0 flex flex-row gap-3 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
                                                <div className="basis-0 flex flex-col gap-2 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
                                                  <div className="relative shrink-0 w-full">
                                                    <div className="flex flex-row items-center relative size-full">
                                                      <div className="flex flex-row items-center justify-start pl-2 pr-0 py-0 relative w-full">
                                                        <div className="basis-0 flex flex-col font-semibold grow justify-center leading-0 min-h-px min-w-px opacity-64 relative shrink-0 text-[#ffffff] text-xs text-left">
                                                          <p className="block leading-normal">Other</p>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
                                                    <div className="flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-full">
                                                      <div className="flex flex-row items-center justify-start max-w-64 min-w-[100px] p-0 relative shrink-0 w-full">
                                                        <div className="basis-0 flex flex-row gap-4 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
                                                          <div className="flex flex-row gap-1 h-6 items-center justify-start px-2 py-0 relative rounded-lg shrink-0">
                                                            <GitHubIcon className="w-4 h-4 text-gray-600" />
                                                            <div className="text-[#efefef] text-xs">{`{no.} git repo(s) ignored`}</div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="bg-[rgba(229,229,229,0.11)] grow h-px min-h-px min-w-px shrink-0"/>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Chat Panel */}
                    <div className="bg-[#1c1c1c] flex flex-col-reverse h-full items-start justify-start order-1 overflow-hidden p-0 relative rounded-xl shrink-0 w-[324px]">
                      {/* Chat Header */}
                      <div className="bg-[#1c1c1c] order-3 relative shrink-0 w-full">
                        <div className="absolute border-b border-[#292929] bottom-[-0.5px] left-0 pointer-events-none right-0 top-0"/>
                        <div className="flex flex-col items-end relative size-full">
                          <div className="flex flex-col-reverse items-end justify-start p-3 relative w-full">
                            <div className="flex flex-row gap-3 items-center justify-start order-1 p-0 relative shrink-0 w-full">
                              <div className="basis-0 font-normal grow leading-0 min-h-px min-w-px opacity-72 relative shrink-0 text-[#eeeef0] text-sm text-left">
                                <p className="block leading-normal">New Chat</p>
                              </div>
                              <div className="flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
                                <IconButton>
                                  <PlusIcon className="w-4 h-4 text-gray-400" />
                                </IconButton>
                                <IconButton>
                                  <RefreshIcon className="w-4 h-4 text-gray-400" />
                                </IconButton>
                                <IconButton className="bg-[rgba(235,235,235,0.08)]">
                                  <CloseIcon className="w-4 h-4 text-gray-600" />
                                </IconButton>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Chat Content */}
                      <div className="basis-0 flex flex-col gap-14 grow items-center justify-center min-h-px min-w-px order-2 p-0 relative shrink-0 w-full">
                        <div className="flex items-center justify-center relative shrink-0">
                          <div className="w-14 h-14 text-gray-400">
                            <AIIcon className="w-full h-full" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Chat Footer */}
                      <div className="order-1 relative shrink-0 w-full">
                        <div className="absolute border-t border-[#292929] bottom-[-0.5px] left-0 pointer-events-none right-0 top-0"/>
                        <div className="flex flex-col items-end relative size-full">
                          <div className="flex flex-col items-end justify-start p-3 relative w-full">
                            <div className="flex flex-col items-start justify-start pb-2 pt-0 px-0 relative shrink-0 w-full">
                              {/* Suggestions */}
                              <div className="bg-[#1a1a1a] flex flex-col gap-0.5 items-start justify-start mb-[-8px] pb-4 pt-0 px-0 relative rounded-tl-2 rounded-tr-2 shrink-0 w-full">
                                <div className="max-h-[148px] relative rounded-tl-3 rounded-tr-3 shrink-0 w-full">
                                  <div className="max-h-inherit relative h-full">
                                    <div className="flex flex-col gap-4 items-start justify-start max-h-inherit pb-1 pt-2 px-2 relative w-full">
                                      <div className="text-[#ffffff] text-xs font-semibold opacity-64">Suggestions</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col gap-4 items-start justify-start max-h-[148px] p-0 relative rounded-tl-3 rounded-tr-3 shrink-0 w-full">
                                  <div className="flex flex-col gap-0.5 items-start justify-start p-0 relative shrink-0 w-full">
                                    {[1, 2, 3].map((i) => (
                                      <div key={i} className="h-6 relative rounded-lg shrink-0 w-full">
                                        <div className="flex flex-row items-center relative size-full">
                                          <div className="flex flex-row gap-1 h-6 items-center justify-start px-2 py-0 relative w-full">
                                            <ArrowTopRightIcon className="w-4 h-4 text-[#efefef]" />
                                            <div className="text-[#efefef] text-xs">Suggestion text</div>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              
                              {/* Input */}
                              <form onSubmit={handleChatSubmit} className="bg-[#1a1a1a] flex flex-row gap-2 items-center justify-start p-2 relative rounded-lg shrink-0 w-full">
                                <div className="grow min-h-px min-w-px relative">
                                  <div className="flex flex-row items-center relative h-full">
                                    <input
                                      type="text"
                                      value={chatMessage}
                                      onChange={(e) => setChatMessage(e.target.value)}
                                      placeholder="Ask Fly..."
                                      className="grow bg-transparent text-[rgba(241,241,241,0.48)] text-sm placeholder-[rgba(241,241,241,0.48)] focus:outline-none focus:text-white"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-row gap-1 items-center justify-end p-0 relative">
                                  <IconButton 
                                    type="submit"
                                    className="bg-[rgba(47,130,255,0.24)] hover:bg-[rgba(47,130,255,0.32)] transition-colors"
                                  >
                                    <SendIcon className="w-4 h-4 text-[#3e7edd]" />
                                  </IconButton>
                                  <IconButton className="bg-[rgba(235,235,235,0.08)] hover:bg-[rgba(235,235,235,0.12)] transition-colors">
                                    <ArrowUpIcon className="w-4 h-4 text-gray-600" />
                                  </IconButton>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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