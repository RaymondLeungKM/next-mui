import dynamic from "next/dynamic";

export default dynamic(() => import("./FirebaseAuthUI"), { ssr: false });