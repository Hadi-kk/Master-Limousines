"use client";
export default function Loading() {
    // Or a custom loading skeleton component
    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div className="cssload-loader">Master Limousine</div>
        </div>
    );
}
