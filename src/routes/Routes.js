import { Route, Routes } from "react-router-dom";

export const Routes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<div>HomePage</div>} />
            <Route exact path="/courses" element={<div>Courses</div>} />
            <Route exact path="/pricing" element={<div>Pricing</div>} />
            <Route exact path="/about" element={<div>About</div>} />
            <Route exact path="/resources" element={<div>Resources</div>} />
            <Route exact path="/contact" element={<div>Contact</div>} />
            <Route
                exact
                path="/registration"
                element={<div>Registration</div>}
            />
        </Routes>
    );
};
