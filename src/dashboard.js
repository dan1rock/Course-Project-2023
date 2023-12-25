let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

const openSidebar = () => {
    if (sidebarOpen) return;
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
}

const closeSidebar = () => {
    if (!sidebarOpen) return;
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
}