import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
    providers:[
         GoogleProvider({
            clientId:process.env.GOOGLE_ID as string,
            clientSecret:process.env.GOOGLE_SECRET as string 
         })
    ],
    session:{
        strategy:"jwt"
    },
    callbacks:{
        async signIn({profile,account}){
            console.log("this is profile: ",profile);
            console.log("this is account: ",account);
            return true
        },
        async jwt({ token, account, profile }) {
            if (account) {
                console.log(account);
                
              token.accessToken = account.access_token
              token.sub = profile?.sub
            }
            return token
          },
        async session({session,token}){
            console.log(session);
            return {...session,token}
        },
    }
})

export {handler as GET , handler as POST }