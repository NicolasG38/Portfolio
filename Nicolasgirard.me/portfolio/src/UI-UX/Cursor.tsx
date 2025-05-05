import { Cursor } from "motion-plus/react"
import * as motion from "motion/react-client"

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
    gap: 50,
}

const button: React.CSSProperties = {
    backgroundColor: "#ff0088",
    color: "#f5f5f5",
    fontSize: 16,
    padding: "10px 20px",
    borderRadius: 10,
}

const text: React.CSSProperties = {
    fontSize: 20,
}

const largeText: React.CSSProperties = {
    fontSize: 64,
}

