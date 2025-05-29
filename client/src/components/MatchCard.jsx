import React from 'react';

const MatchCard = ({ match }) => {
    console.log(match);

    const homeTeam = match.homeTeam || 'Home Team';
    const awayTeam = match.awayTeam || 'Away Team';
    const matchDate = new Date(match.date);
    const formattedDate = matchDate.toLocaleDateString();
    const formattedTime = matchDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const status = match.status || 'Scheduled';
    const venue = match.venue || 'Unknown Venue';
    const league = match.league || 'Unknown League';

    return (
        <div className="relative bg-gradient-to-br from-indigo-800 via-indigo-600 to-indigo-400 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 ease-in-out border-4 border-white/10">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-3xl"></div>
            <div className="relative z-10 space-y-4">

                <div className="flex justify-between items-center text-sm">
                    <span className="font-semibold" style={{ color: 'rgb(8, 6, 57)' }}>{formattedDate}</span>
                    <span className="flex items-center font-semibold" style={{ color: 'rgb(8, 6, 57)' }}>
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-1"></span>
                        {formattedTime}
                    </span>
                </div>

                <div className="inline-block px-3 py-1 text-xs font-semibold uppercase rounded-full bg-indigo-200 text-indigo-800">
                    {status}
                </div>

                <div className="flex items-center justify-between mt-4">
                    <div className="flex-1 text-center text-base font-bold px-3 py-1" style={{ color: 'rgb(8, 6, 57)' }}>
                        {homeTeam}
                    </div>

                    <div className="flex items-center justify-center bg-black text-white rounded-full w-10 h-10 text-sm font-bold shadow-md hover:scale-110 transition-transform duration-200">
                        VS
                    </div>

                    <div className="flex-1 text-center text-base font-bold px-3 py-1" style={{ color: 'rgb(8, 6, 57)' }}>
                        {awayTeam}
                    </div>
                </div>

                <div className="bg-white/20 backdrop-blur-lg rounded-xl p-3 shadow-inner mt-4 space-y-1" style={{ color: 'rgb(26, 21, 164))' }}>
                    <div className="text-base font-medium text-indigo-50">
                        <span className="font-bold" style={{ color: 'rgb(8,6,57)' }}>Venue : </span>{venue}
                    </div>
                    <div className="text-base font-medium text-indigo-50">
                        <span className="font-bold" style={{ color: 'rgb(8,6,57)' }}>League : </span>{league}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatchCard;