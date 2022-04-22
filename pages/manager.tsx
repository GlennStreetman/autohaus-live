import { SessionProvider } from "next-auth/react";

import Body from "../components/manager/body";

function manager() {
    return (
        <SessionProvider
            // @ts-ignore
            options={{
                staleTime: 0,
                refetchInterval: 0,
            }}
        >
            <Body />
        </SessionProvider>
    );
}

export default manager;
