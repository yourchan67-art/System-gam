document.addEventListener('DOMContentLoaded', () => {
    console.log('গ্যামিফাইড ওয়েবসাইট লোড হয়েছে!');

    // ইউজার প্রোফাইল সেটআপ
    const userProfile = {
        name: "নতুন ব্যবহারকারী",
        level: 1,
        score: 0,
        energy: 100,
        pointsPerLevel: 100 // লেভেল আপের জন্য প্রয়োজনীয় পয়েন্ট
    };

    function updateUI() {
        const profileDiv = document.getElementById('profile');
        profileDiv.innerHTML = `
            <h2>ব্যবহারকারী: ${userProfile.name}</h2>
            <p>লেভেল: ${userProfile.level}</p>
            <p>স্কোর: ${userProfile.score}</p>
            <p>শক্তি: ${userProfile.energy}</p>
        `;
    }

    // মিশন তালিকা
    const missions = [
        { id: 1, title: "প্রথম মিশন: আপনার প্রোফাইল সম্পূর্ণ করুন", reward: 40, completed: false },
        { id: 2, title: "দ্বিতীয় মিশন: একটি পোস্ট শেয়ার করুন", reward: 30, completed: false },
        { id: 3, title: "তৃতীয় মিশন: বন্ধুদের আমন্ত্রণ জানান", reward: 50, completed: false }
    ];

    function renderMissions() {
        const missionsDiv = document.getElementById('missions');
        missionsDiv.innerHTML = "<h3>আপনার মিশনগুলো:</h3>";
        missions.forEach(mission => {
            const missionElement = document.createElement('div');
            missionElement.innerHTML = `
                <p>${mission.title}</p>
                <button onclick="completeMission(${mission.id})" ${mission.completed ? 'disabled' : ''}>
                    ${mission.completed ? 'সম্পন্ন হয়েছে' : 'মিশন সম্পন্ন করুন'}
                </button>
            `;
            missionsDiv.appendChild(missionElement);
        });
    }

    window.completeMission = function(missionId) {
        const mission = missions.find(m => m.id === missionId);
        if (mission && !mission.completed) {
            mission.completed = true;
            userProfile.score += mission.reward;
            
            // লেভেল আপের লজিক
            if (userProfile.score >= userProfile.level * userProfile.pointsPerLevel) {
                userProfile.level += 1;
                alert(`অভিনন্দন! আপনি লেভেল আপ করেছেন! আপনার নতুন লেভেল: ${userProfile.level}`);
            }

            alert(`অভিনন্দন! আপনি '${mission.title}' সম্পন্ন করেছেন এবং ${mission.reward} পয়েন্ট পেয়েছেন।`);
            updateUI();
            renderMissions();
        }
    };

    updateUI();
    renderMissions();
});
