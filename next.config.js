/** @type {import('next').NextConfig} */

module.exports = {
    async redirects() {
        return [
            {
                source: '/vip/doors',
                destination: 'https://www.roblox.com/games/6516141723?privateServerLinkCode=93788170315805114334896237192563',
                permanent: true,
            },
            {
                source: '/vip/pls-donate',
                destination: 'https://www.roblox.com/games/8737602449?privateServerLinkCode=93197030446730624334551184118810',
                permanent: true,
            },
            {
                source: '/vip/intruder',
                destination: 'https://www.roblox.com/games/8073154099?privateServerLinkCode=92928599800703137397955421852754',
                permanent: true,
            },
            {
                source: '/pls-donate',
                destination: 'https://www.plsdonate.me/sulphurdev',
                permanent: true,
            },
            {
                source: '/socials/discord',
                destination: 'https://www.discord.gg/JfRXtkvMUB',
                permanent: true,
            },
            {
                source: '/socials/x',
                destination: 'https://www.x.com/robuxtrex',
                permanent: true,
            },
            {
                source: '/socials/youtube',
                destination: 'https://www.youtube.com/@robuxtrex',
                permanent: true,
            },
            {
                source: '/vip/chain',
                destination: 'https://www.roblox.com/games/10204250851?privateServerLinkCode=60768339969848402304842703409361',
                permanent: true,
            },
            {
                source: '/socials/youtube',
                destination: 'https://www.youtube.com/@robuxtrex',
                permanent: true,
            },
            {
                source: '/giga-chad',
                destination: 'https://media.tenor.com/epNMHGvRyHcAAAAd/gigachad-chad.gif',
                permanent: true,
            },
        ];
    },
};