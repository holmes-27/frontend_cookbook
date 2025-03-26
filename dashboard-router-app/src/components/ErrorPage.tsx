import React from "react";

const ErrorPage: React.FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <img src="./page_not_found.avif" height={500} alt="page not found" />
        </div>
    );
}

export default ErrorPage;
