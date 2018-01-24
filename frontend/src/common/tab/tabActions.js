export const selectTab = tabId => {
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }    
}

export const showTabs = (...tabIds) => {
    const tabsToShow = {}
    tabIds.forEach(tab => tabsToShow[tab]=true )
    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}

// export const selectContent