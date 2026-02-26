import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MaintenanceDialog from './MaintenanceDialog';

// NOTE: You can manage this state via an env variable or context if needed.
// For now, it's hardcoded to true for demo purposes.
const MAINTENANCE_MODE_ENABLED = true;

interface MaintenanceGuardProps {
    children: React.ReactNode;
}

export default function MaintenanceGuard({ children }: MaintenanceGuardProps) {
    const location = useLocation();
    const navigate = useNavigate();
    const [showDialog, setShowDialog] = useState(false);

    useEffect(() => {
        // If maintenance mode is enabled and the user is NOT on the home page ('/')
        if (MAINTENANCE_MODE_ENABLED && location.pathname !== '/') {
            setShowDialog(true);
        } else {
            setShowDialog(false);
        }
    }, [location.pathname]);

    const handleReturnHome = () => {
        setShowDialog(false);
        navigate('/', { replace: true });
    };

    return (
        <>
            {/* 
        When maintenance is active and we are NOT on home page, 
        we block the children from rendering to truly hide the content.
      */}
            {showDialog ? (
                <div className="min-h-screen bg-black">
                    {/* We render an empty black screen behind the dialog so the blocked page doesn't show */}
                </div>
            ) : (
                children
            )}

            <MaintenanceDialog
                isOpen={showDialog}
                onReturnHome={handleReturnHome}
            />
        </>
    );
}
