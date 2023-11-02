import { Navigate } from "react-router-dom";

export const ProtectedRoute = (children, redirectPach = "/", isAlowed ) => {
    if (!isAlowed) {
        return <Navigate to={redirectPach} replace={true} />
    }
    return children;
};

