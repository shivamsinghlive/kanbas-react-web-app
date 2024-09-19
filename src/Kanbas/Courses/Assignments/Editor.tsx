export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
            <label htmlFor="wd-name"><strong>Assignment Name</strong></label><br /><br />
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
                The assignment is available online Submit a link to the landing page of your Web application running on Netlify.The landing page should include the following: Your full name and section Links to each of the lab assignmments. Link to the Kanbas application Links to all relevant source code repositories.The kanbas apllication should include a link to naviagate back to the landing page.
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="Assignments">Assignments</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="Assignments">Percentage</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type </label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option value="Assignments">Online</option>
                        </select>
                        <br />

                        <h5 id="wd-online-entry">Online Entry Options</h5>
                        

                        <input type="checkbox" name="submission-type" id="wd-text-entry" />
                        <label htmlFor="wd-text-entry">Text</label><br />

                        <input type="checkbox" name="check-submission-type" id="wd-website-url" />
                        <label htmlFor="wd-website-url">Website URL</label><br />

                        <input type="checkbox" name="submission-type" id="wd-media-recordings" />
                        <label htmlFor="wd-media-recordings">Media_recordings</label><br />

                        <input type="checkbox" name="submission-type" id="wd-student-annotation" />
                        <label htmlFor="wd-student-annotation">Student Annotations</label><br />

                        <input type="checkbox" name="submission-type" id="wd-file-upload" />
                        <label htmlFor="wd-file-upload">File Uploads</label>


                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign </label>
                    </td>
                    <td>
                        <label htmlFor="wd-assign-to">Assign to</label><br />
                        <input id="wd-assign-to" placeholder="Everyone" />
                        <br />
                        <br />


                        <label htmlFor="wd-due-date"> Due </label>
                        <br />
                        <input type="date"
                            id="wd-due-date"
                            value="2024-05-13" />
                        <br />
                        <br />

                        <table>
                            <tr>
                                <td>
                                    <label htmlFor="wd-available-from"> Available from </label><br />
                                    <input type="date"
                                        id="wd-available-from"
                                        value="2024-05-06" />
                                </td>
                                <td>

                                    <label htmlFor="wd-available-until">   Until </label><br />
                                    <input type="date"
                                        id="wd-available-until"
                                        value="2024-05-20" />
                                </td>
                            </tr>
                        </table>


      


                    </td>

                </tr>
                <br />

                {/* Complete on your own */}
            </table>

            <hr />
            <div style = {{ marginLeft: '295px', display: 'flex', gap: '5px' }}>
                <button>
                    Cancel 
                    </button>
                    <button>
                    Save
                    </button>
            </div>
        </div>
  );
}
