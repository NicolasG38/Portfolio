import { Cursor } from "motion-plus/react"


export default function CursorDefaultSettings() {
    return (
        <div style={container}>
            <Cursor
                style={cursor}
                variants={{ text: { backgroundColor: "#9f8170" } }}
            />
        </div>
    )
}

/**
 * ==============   Styles   ================
 */

const cursor: React.CSSProperties = {
    backgroundColor: "#f5f5f5",
}

const container: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 50,}




