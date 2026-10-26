import { Navigate, Route, Routes } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout.tsx'
import DashboardPage from './pages/DashboardPage.tsx'
import PlaceholderPage from './pages/PlaceholderPage.tsx'

function App() {
  return (
    
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="events" element={<PlaceholderPage title="Events" />} />
        <Route
          path="attendees"
          element={<PlaceholderPage title="Attendees" />}
        />
        <Route
          path="check-in"
          element={<PlaceholderPage title="Check-in" />}
        />
        <Route path="settings" element={<PlaceholderPage title="Settings" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
    
  )
}

export default App
