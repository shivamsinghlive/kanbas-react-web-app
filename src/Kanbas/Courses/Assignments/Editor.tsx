export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
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
        <td align="right" valign="top">
          <label htmlFor="wd-assignment-group">Assignment Group</label>
        </td>
        <td>
          {/* <input id="wd-points" value={100} /> */}
          <select name="wd-assignment-group" id="wd-assignment-group-select">
            <option value="assignment_1">Assignment 1</option>
          </select>
        </td>
        <tr>
          <td>
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select name="wd-display-grade-as" id="wd-display-grade-as-select">
              <option value="percentage">Percentage</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select name="wd-submission-type" id="wd-submission-type-select">
              <option value="online">Online</option>
            </select>
            <br />
          </td>
        </tr>
        <br />
        <tr>
          <td></td>
          <td>
            <label htmlFor="none">Online Entry Options</label>
            <br />
            <input
              type="checkbox"
              name="wd-online-entry-options"
              id="wd-text-entry"
              value="text-entry"
            />
            <label htmlFor="wd-text-entry">Text Entry</label>
            <br />
            <input
              type="checkbox"
              name="wd-online-entry-options"
              id="wd-website-url"
              value="website-url"
            />
            <label htmlFor="wd-website-url">Website URL</label>
            <br />
            <input
              type="checkbox"
              name="wd-online-entry-options"
              id="wd-media-recordings"
              value="media-recordings"
            />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br />
            <input
              type="checkbox"
              name="wd-online-entry-options"
              id="wd-student-annotation"
              value="student-annotation"
            />
            <label htmlFor="wd-website-url">Student Annotation</label>
            <br />
            <input
              type="checkbox"
              name="wd-online-entry-options"
              id="wd-file-uploads"
              value="file-uploads"
            />
            <label htmlFor="wd-website-url">File Uploads</label>
            <br />
          </td>
          
        </tr>

        <tr>
          {/* <br /> */}
          <td>Assign</td>
          <td>
            <label htmlFor="wd-assign-to">Assign to</label> <br />
            <input
              type="text"
              name="wd-assign-to-name"
              id="wd-assign-to"
              value="Everyone"
            />
            
          </td>
        </tr>
        <tr>
          
          <td></td>
          <td>
            <label htmlFor="wd-due">Due</label> <br />
            <input
              type="date"
              name="wd-due-name"
              id="wd-due"
              value="2024-05-13"
            />
            <br />
            <table>
              <tr>
                <td>
                  <label htmlFor="wd-available-from-date">Available From</label>
                  <br />

                  <input
                    type="date"
                    name="wd-available-from-date-name"
                    id="wd-available-from-date"
                    value="2024-05-06"
                  />
                </td>
                <td>
                  <label htmlFor="wd-until-date">Until</label>
                  <br />
                  <input
                    type="date"
                    name="wd-until-date-name"
                    id="wd-until-date"
                    value="2024-05-20"
                  />
                </td>
              </tr>
            </table>
            <hr />
            <div style={{ float: "right" }}>
              <button>Cancel</button>
              <button>Save</button>
            </div>
            <br />
          </td>
        </tr>
        {/* Complete on your own */}
      </table>
    </div>
  );
}
