
export default{
context:[
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
],

    theme:{
        extend:{
            colors:{
                'card-dark':'#1a1a2e',
                'card-light':'#e6e6fa',
                'accent-purple':'#6c63ff'
            },
            animation:{
                'spin-slow':'spin 10s linear infinite',
                'pulse-slow':'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
            },
            Keyframe:{
                wiggle:{
                    '0%,100%':{transform:'rotate(-3deg)'},
                    '50%':{transform:'rotate(3deg)'},
                }
            },
        },
    },
    plugins:[],
}

