import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useJobContext } from '../context/JobContext';
import { useApplicationContext } from '../context/ApplicationContext';
import { Ship } from 'lucide-react';

const JobApplication = () => {
    const { jobId } = useParams();
    const navigate = useNavigate();
    const { state: { jobs } } = useJobContext();
    const { submitApplication, state: appState } = useApplicationContext();

    const [formData, setFormData] = useState({
        jobId: jobId,
        fullName: '',
        email: '',
        phoneNumber: '',
        nationality: '',
        referralSource: 'Direct'
    });

    const [resume, setResume] = useState(null);
    const [error, setError] = useState('');
    const job = jobs.find(j => j._id === jobId);

    useEffect(() => {
        if (!job) {
            navigate('/vacanciesui');
        }
    }, [job, navigate]);

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.size > 5 * 1024 * 1024) { // 5MB limit
            setError('File size should not exceed 5MB');
            return;
        }
        setResume(file);
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!resume) {
            setError('Please upload your resume');
            return;
        }

        const submitData = new FormData();
        Object.keys(formData).forEach(key => {
            submitData.append(key, formData[key]);
        });
        submitData.append('resume', resume);

        try {
            await submitApplication(jobId, submitData);
            alert('Application submitted successfully!');
            navigate('/vacanciesui');
        } catch (err) {
            setError(err.message || 'Failed to submit application');
        }
    };

    if (!job) {
        return <div className="text-center py-8">Loading...</div>;
    }

    return (
        <div className="max-w-2xl mx-auto p-6">
            <div className="flex items-center mb-8">
                <Ship className="text-slate-800 mr-3" size={32} />
                <h1 className="text-3xl font-bold text-gray-900">Apply for {job.jobTitle}</h1>
            </div>

            {(error || appState.error) && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    {error || appState.error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Nationality</label>
                    <input
                        type="text"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Referral Source</label>
                    <select
                        name="referralSource"
                        value={formData.referralSource}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Referral">Referral</option>
                        <option value="Direct">Direct</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Resume (PDF/DOC/DOCX, max 5MB)</label>
                    <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        required
                        className="mt-1 block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-md file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-50 file:text-blue-700
                        hover:file:bg-blue-100"
                    />
                </div>

                <button
                    type="submit"
                    disabled={appState.loading}
                    className="w-full bg-slate-800 text-white py-2 px-4 rounded hover:bg-slate-700 
                             transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    {appState.loading ? 'Submitting...' : 'Submit Application'}
                </button>
            </form>
        </div>
    );
};

export default JobApplication;
