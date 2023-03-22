import { Navigate, Route, Routes } from 'react-router-dom';
import { PublicRoutes } from '@/routes/config';
import './App.css';

function App() {
  return (
    <Routes>
      {PublicRoutes.map(({ path, Component }) =>
        <Route path={path} element={<Component />} key={path} />,
      )}

      <Route
        path='*'
        element={<Navigate to={`/`} replace />}
      />
    </Routes>
  );
}

export default App;
