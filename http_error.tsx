import fs from "node:fs";

// This file is based on the one generated from the Nunjucks template at /public/shared-common/http_error.html.
// Please keep it up-to-date with that template.

export default function HTTPErrorPage(props) {
    return (
        <>
            <style jsx global>{`
                ${fs.readFileSync((props.prefix ?? "") + (props.prefix ? "/" : "./") + "css/default.css", "utf8")}
            `}</style>
            <style jsx global>{`
                ${fs.readFileSync((props.prefix ?? "") + (props.prefix ? "/" : "./") + "css/themes/yel-chem-research-light.css", "utf8")}
            `}</style>
            <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%" }}>
                <main className="main-box reading-box" style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
                    <h1>
                        {props.status} {props.message}
                    </h1>
                    <p>We've {props.isOk ? "<em>(not)</em>" : ""} run into an error!</p>
                    <h2>Well...</h2>
                    <div className="content-box">
                        <img
                            className="brm"
                            src={`data:image/gif;base64, ${fs.readFileSync((props.prefix ?? "") + (props.prefix ? "/" : "./") + "res/well.gif", "base64")}`}
                            alt="Rotating view of a low-poly well."
                            style={{ width: "32em", minWidth: "8em", maxWidth: "100%" }}
                        />
                    </div>
                    <p>{props.description}</p>
                    <p>
                        Developer documentation for this HTTP response can be found{" "}
                        <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status#{{ props.moz_dev_docid }}" target="_blank" rel="noreferrer">
                            here
                        </a>
                        .
                    </p>
                </main>
                <footer className="footer-box" style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", flexWrap: "wrap-reverse" }}>
                    <img
                        className="content-box"
                        src={`data:image/svg+xml;base64, ${fs.readFileSync(
                            (props.prefix ?? "") + (props.prefix ? "/" : "./") + "res/Yellow Chemistry Research Logo (Light).svg",
                            "base64"
                        )}`}
                        alt="Yellow Chemistry Research Logo"
                        style={{ width: "4em", marginTop: "auto" }}
                    />
                    <p style={{ marginTop: "auto", marginLeft: "auto" }}>
                        <em>
                            Image courtesy of{" "}
                            <a href="https://www.youtube.com/playlist?list=PLn3ukorJv4vu6pnoAtivKf5Bo_6oQS0N_" target="_blank" rel="noreferrer">
                                Grant Abbitt
                            </a>
                            ,{" "}
                            <a href="https://dribbble.com/shots/7294627-Water-Well-animation" target="_blank" rel="noreferrer">
                                Venkata Ramkumar
                            </a>
                            .
                        </em>
                    </p>
                </footer>
            </div>
        </>
    );
}
