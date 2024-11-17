import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlsButton";
import { useParams } from "react-router";
import * as db from "../../Database";
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from "react";
import ModuleControlButtons from "./ModuleControlButtons";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import DeleteModuleModal from "./DeleteModuleModalProps";

export default function Modules() {
  const { cid } = useParams();
  // const modules = db.modules.filter((module) => module.course === cid);
  // const [modules, setModules] = useState<any[]>(db.modules);
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const userRole = currentUser.role;
  const dispatch = useDispatch();

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [moduleToDelete, setModuleToDelete] = useState<string | null>(null);

  const handleDeleteModule = (moduleId: string) => {
    setShowDeleteModal(true);
    setModuleToDelete(moduleId);
  };

  const confirmDeleteModule = (moduleId: string) => {
    dispatch(deleteModule(moduleId));
    setShowDeleteModal(false);
    setModuleToDelete(null);
  };

  return (
    <div>
      {/* <div className="wd-dashboard-controls">
        <button className="collapse-all-button">Collapse All</button>
        <button className="view-progress-button">View Progress</button>
      </div> */}
      <ModulesControls
        setModuleName={setModuleName}
        moduleName={moduleName}
        // addModule={addModule}
        addModule={() => {
          dispatch(addModule({ name: moduleName, course: cid }));
          setModuleName("");
        }}
      />
      <br />
      <br />
      <br />
      <br />

      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <li
              key={module._id}
              className="wd-module list-group-item p-0 mb-5 fs-5 border-gray"
            >
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {/* {module.name} {/* Dynamically render the module name */}
                {!module.editing && module.name}
                {userRole === "FACULTY" && module.editing && (
                  <input
                    className="form-control w-50 d-inline-block"
                    onChange={(e) =>
                      dispatch(
                        updateModule({ ...module, name: e.target.value })
                      )
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        dispatch(updateModule({ ...module, editing: false }));
                      }
                    }}
                    defaultValue={module.name}
                  />
                )}
                <ModuleControlButtons
                  moduleId={module._id}
                  // deleteModule={(moduleId) => {
                  //   dispatch(deleteModule(moduleId));
                  // }}
                  deleteModule={() => handleDeleteModule(module._id)}
                  editModule={(moduleId) => dispatch(editModule(moduleId))}
                />
              </div>
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map(
                    (lesson: {
                      _id: Key | null | undefined;
                      name:
                        | string
                        | number
                        | boolean
                        | ReactElement<any, string | JSXElementConstructor<any>>
                        | Iterable<ReactNode>
                        | ReactPortal
                        | null
                        | undefined;
                    }) => (
                      <li
                        key={lesson._id}
                        className="wd-lesson list-group-item p-3 ps-1"
                      >
                        <BsGripVertical className="me-2 fs-3" />
                        {lesson.name}
                        <LessonControlButtons />
                      </li>
                    )
                  )}
                </ul>
              )}
            </li>
          ))}
      </ul>

      <DeleteModuleModal
        show={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={() => moduleToDelete && confirmDeleteModule(moduleToDelete)}
        moduleId={moduleToDelete || ""}
        title="Are you sure you want to delete this module?"
      />
    </div>
  );
}
