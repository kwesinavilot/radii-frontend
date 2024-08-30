import React, { useState, useEffect } from "react";
import axios from "axios";
import generateAxiosConfig from "../../app/config/axiosConfig";

interface NovaAIModalProps {
    isOpen: boolean;
    onClose: () => void;
    viewID: string;
}

const NovaAIModal: React.FC<NovaAIModalProps> = ({ isOpen, onClose, viewID }) => {
    const [insights, setInsights] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (isOpen) {
            fetchNovaInsights();
        }
    }, [isOpen]);

    const fetchNovaInsights = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(
                `https://raoyanmo-frogs-app-ki8xj.ondigitalocean.app/insights/nova?viewID=${viewID}`,
                generateAxiosConfig()
            );
            setInsights(response.data);
        } catch (error) {
            console.error("Failed to fetch Nova Insights:", error);
            setError("Failed to fetch Nova Insights");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg">
                <div className="mb-4 flex justify-between">
                    <h2 className="text-xl font-bold mb-4">Nova AI Insights</h2>
                    
                    <button
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>

                {loading ? (
                    <p>Loading insights...</p>
                ) : error ? (
                    <p className="text-red-500">{error}</p>
                ) : insights ? (
                    <div className="text-sm whitespace-pre-wrap">{insights}</div>
                ) : (
                    <p>No insights available.</p>
                )}
            </div>
        </div>
    );
};

export default NovaAIModal;
