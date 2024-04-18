import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Users from './Users';
import Settings from './Settings';

const AdminPanel = () => {
  const [currentUser, setCurrentUser] = useState(null);

  // Simulate authentication check
  useEffect(() => {
    // Check if user is authenticated (you would replace this with your actual authentication logic)
    const isAuthenticated = true; // Example: Check if user is logged in

    if (!isAuthenticated) {
      // Redirect user to login page or display authentication prompt
      // Example: history.push('/login');
      console.log('User is not authenticated');
    } else {
      // Fetch current user data (you would replace this with your actual user data fetching logic)
      // Example: const user = authService.getCurrentUser();
      const user = { name: 'Admin', role: 'admin' }; // Example user object
      setCurrentUser(user);
    }
  }, []);

  return (
    <Router>
      <div className="admin-panel">
        <nav>
          <ul>
            <li>
              <Link to="/admin/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/admin/users">Users</Link>
            </li>
            <li>
              <Link to="/admin/settings">Settings</Link>
            </li>
          </ul>
        </nav>
        <div className="admin-content">
          <Switch>
            <Route path="/admin/dashboard">
              <Dashboard currentUser={currentUser} />
            </Route>
            <Route path="/admin/users">
              <Users currentUser={currentUser} />
            </Route>
            <Route path="/admin/settings">
              <Settings currentUser={currentUser} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default AdminPanel;
