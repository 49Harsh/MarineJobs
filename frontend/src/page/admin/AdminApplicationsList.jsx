import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/api';
import { FileText, Download, Mail, Phone, Globe, Trash2 } from 'lucide-react';

const AdminApplicationsList = () => {
    const { jobId } = useParams();
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchApplications();
    }, [jobId]);

    const fetchApplications = async () => {
        try {
            const endpoint = jobId 
                ? `/admin/jobs/${jobId}/applications`
                : '/admin/applications';
                
            console.log('Fetching from endpoint:', endpoint);
            const response = await api.get(endpoint);
            console.log('Response:', response.data);
            setApplications(response.data.applications || []);
            setLoading(false);
        } catch (err) {
            console.error('Error fetching applications:', err);
            setError('Failed to fetch applications');
            setLoading(false);
        }
    };

    const handleStatusChange = async (applicationId, newStatus) => {
        try {
            await api.patch(`/admin/applications/${applicationId}`, { status: newStatus });
            fetchApplications(); // Refresh the list
        } catch (err) {
            setError('Failed to update application status');
        }
    };

    const handleDelete = async (applicationId) => {
        if (window.confirm('Are you sure you want to delete this application?')) {
            try {
                await api.delete(`/applications/${applicationId}`);
                fetchApplications(); // Refresh the list after deletion
            } catch (err) {
                setError('Failed to delete application');
            }
        }
    };

    if (loading) return <div className="text-center py-8">Loading applications...</div>;
    if (error) return <div className="text-red-500 text-center py-8">{error}</div>;
    if (!applications.length) return <div className="text-center py-8">No applications found</div>;

    return (
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">
                Job Applications ({applications.length})
            </h2>
            <div className="grid gap-6">
                {applications.map((application) => (
                    <div key={application._id} className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-semibold">{application.fullName}</h3>
                                <p className="text-gray-600">
                                    Applied for: {application.jobId?.jobTitle || 'Job title not available'}
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <select
                                    value={application.status}
                                    onChange={(e) => handleStatusChange(application._id, e.target.value)}
                                    className="rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                >
                                    <option value="Pending">Pending</option>
                                    <option value="Reviewed">Reviewed</option>
                                    <option value="Shortlisted">Shortlisted</option>
                                    <option value="Rejected">Rejected</option>
                                </select>
                                {application.resumeUrl && (
                                    <a
                                        href={`https://marinejobs-1.onrender.com${application.resumeUrl}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                                    >
                                        <Download size={20} />
                                        Resume
                                    </a>
                                )}
                                <button
                                    onClick={() => handleDelete(application._id)}
                                    className="text-red-600 hover:text-red-800 p-1"
                                    title="Delete application"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="flex items-center gap-2 text-gray-600">
                                <Mail size={18} />
                                <a href={`mailto:${application.email}`} className="hover:text-blue-600">
                                    {application.email}
                                </a>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                                <Phone size={18} />
                                <a href={`tel:${application.phoneNumber}`} className="hover:text-blue-600">
                                    {application.phoneNumber}
                                </a>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                                <Globe size={18} />
                                {application.nationality}
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                                <FileText size={18} />
                                Source: {application.referralSource}
                            </div>
                        </div>
                        
                        <div className="mt-4 text-sm text-gray-500">
                            Applied on: {new Date(application.appliedOn).toLocaleDateString()}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminApplicationsList;