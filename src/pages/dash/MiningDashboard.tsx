import DeviceStatus from "./DeviceStatus";
import QuickActions from "./QuickActions";
import StatsOverview from "./StatsOverview";
import WalletManagement from "./WalletManagement";
import WithdrawSection from "./WithdrawSection";

// Main Dashboard Layout
export default  () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Sidebar Navigation */}
      {/* <DashboardSidebar /> */}
      
      {/* Main Content */}
      <div className="ml-64 p-6">
        {/* Header */}
        {/* <DashboardHeader /> */}
        
        {/* Stats Overview */}
        <StatsOverview />
        
        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Left Column */}
          <div className="space-y-6">
            <WalletManagement />
            <DeviceStatus />
          </div>
          
          {/* Middle Column */}
          <div className="space-y-6">
            {/* <MiningPerformance /> */}
            <WithdrawSection />
          </div>
          
          {/* Right Column */}
          <div className="space-y-6">
            {/* <RecentActivity /> */}
            <QuickActions />
          </div>
        </div>
      </div>
    </div>
  );
 };


 