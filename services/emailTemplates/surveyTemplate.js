const keys=require('../../config/keys');
module.exports = (survey) => {
    return `<html>
    <body>
        <center>
            <h2>
                I'd like your input!
            </h2>
            <p>
                Please answer the following question:
            </p>
            <p>${survey.body}</p>
            <table>
                <tr>
                    <td>
                        <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a>
                    </td>
                    <td>
                        <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
                    </td>
                </tr>    
            </table>
        </center>
    </body>
    </html>`
};