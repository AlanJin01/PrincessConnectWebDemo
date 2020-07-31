let characterName = document.cookie;
const REG = /character=\w+/g;
characterName = characterName.match(REG).join('');
characterName = characterName.slice(10);

// 各角色信息
let charaProfile = {
    peko2: {
        name: "Pecorine",
        age: 17,
        skillName: "Princess raid",
        skillDescription: "Deal 90 physical damage to all enemies.",
        cv: "MAO",
        personality: "Possessing a voracious appetite and boundless energy, Pecorine lives a seemingly carefree life from meal to meal. She is ever optimistic and is proactive in making friends, regardless of their attitude in return. Pecorine also loves to travel in search of exotic delicacies, and pays respect to all life by not letting any food that is prepared go to waste. Despite being a princess, Pecorine prefers that her friends treat her like an ordinary teenage girl. Due to her circumstances, Pecorine tends to take on the issues surrounding her on her own, and avoids revealing her problems to anyone besides those that she trusts."
    },
    kailu2: {
        name: "Kiruya",
        age: 18,
        skillName: "Green burst",
        skillDescription: "Deal 120 Spell damage to all enemies.",
        cv: "Reika Tachibana",
        personality: "Kyaru can be described as a 'Tsundere' as she is often complaining about her friend, but always follows along regardless. She has a sharp tongue and often gets annoyed and/or flustered. She tries to act tough and harsh on the outside but in fact she is quite soft-hearted. Because she is often ignored by Kaiser and even her own parents, Kyaru often feels lonely. She really values her time spent with the Player as it makes her forget her 'Mission' and all of her stress when she's with them. She is teased often by everyone, including the player."
    },
    cocoro2: {
        name: "Kokoro",
        age: 15,
        skillName: "Aurora",
        skillDescription: "Improve overall physical defense and spell defense",
        cv: "Ito Mirai",
        personality: "Coming soon..."
    }
};
charaProfile = JSON.stringify(charaProfile, null, 2); // 转换成json数据传给前端页面