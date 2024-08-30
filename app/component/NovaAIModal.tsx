import React, { useState, useEffect } from "react";
import axios from "axios";
import generateAxiosConfig from "../../app/config/axiosConfig";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface NovaAIModalProps {
    isOpen: boolean;
    onClose: () => void;
    viewID: string;
}

interface Insight {
    id: string;
    content: string;
    created_at: string;
}

const NovaAIModal: React.FC<NovaAIModalProps> = ({ isOpen, onClose, viewID }) => {
    const [insights, setInsights] = useState<Insight[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (isOpen) {
            fetchNovaInsights();
        }
    }, [isOpen, viewID]);

    const fetchNovaInsights = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(
                `https://raoyanmo-frogs-app-ki8xj.ondigitalocean.app/insights/nova?viewID=${viewID}`,
                generateAxiosConfig()
            );

            // Ensure that the response data is an array of Insight objects
            if (Array.isArray(response.data)) {
                setInsights(response.data[0].insights);
            } else if (typeof response.data === 'object' && response.data.insights) {
                // If the insights are nested under an 'insights' key
                setInsights([response.data.insights]);
            } else {
                // If it's a single insight object, wrap it in an array
                setInsights([response.data]);
            }

            console.log("Nova Insights fetched successfully: ", response);

        } catch (error) {
            console.error("Failed to fetch Nova Insights: ", error);
            setError("Failed to fetch Nova Insights");
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="w-full fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-9/12 bg-white p-6 rounded shadow-lg">
                <div className="mb-4 flex justify-between w-full">
                    <h2 className="text-xl font-bold mb-4">Nova AI Insights</h2>

                    <button
                        className="text-gray-400 hover:text-red-600 transition-colors font-bold"
                        onClick={onClose}
                    >
                        X
                    </button>
                </div>

                <div className="mt-4 w-full max-h-[60vh] overflow-y-auto">
                    {loading && <p>Loading NovaAI insights...</p>}
                    {error && <p className="text-red-500">{error}</p>}
                    {!loading && !error && insights.length === 0 && (
                        <p>NovaAI Insights are currently unavailable for this view.</p>
                    )}
                    {insights.map((insight, index) => (
                        <div key={insight.id || index} className="p-0">
                            <Markdown remarkPlugins={[remarkGfm]} className="prose max-w-none">
                                {insight as any}
                            </Markdown>
                            
                            {insight.created_at && (
                                <p className="text-sm text-gray-500 mt-2">
                                    {new Date(insight.created_at).toLocaleString()}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NovaAIModal;
