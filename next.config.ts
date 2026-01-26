import { before } from "node:test";

module.exports = {
    async rewrites() {
        return {
            beforeFiles: [
                {
                    source: '/rd-rw/rewrite-ticket-dummy',
                    destination: '/rd-rw/rewrite-ticket',
                },
                {
                    source: '/rd-rw/dummy',
                    destination: '/zustand/theme-example-with-zustand',
                },
            ],
            afterFiles: [
                {
                    source: '/rd-rw/dummy',
                    destination: '/zustand/theme-example-with-zustand',
                },
                {
                    source: '/rd-rw/rewrite-ticket-dummy',
                    destination: '/rd-rw/rewrite-ticket-new',
                },
            ],
        };
    },

    async redirects() {
        return [
            // {
            //     source: '/rd-rw/old-blog',
            //     destination: '/rd-rw/new-blog',
            //     permanent: false,
            // },
        ];
    }
};