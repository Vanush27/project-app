import React, {useCallback, useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import AddTask from "./components/AddTask";
import Todo from "./components/Todo";
import "./styles.css";

const Project = () => {

    const [modalShow, setModalShow] = useState(false);


    const [mockTasks, setMockTasks] = useState([]);

    const [editItem, setEditItem] = useState();


    const handleOpenAddTaskModal = () => {
        setEditItem(null);
        setModalShow(true);
    }
    const handleCloseAddTaskModal = () => {
        setModalShow(false);
    }

    const handleEdit = (id) => {
        // debugger
        const editData = localStorage.getItem('data');
        const parseEditData = JSON.parse(editData);
        if (parseEditData) {
            parseEditData.map((item) => {
                if (item.id === id) {
                    setEditItem(item);
                    setModalShow(true);
                }
            });

        }

    }

    const handleDeleteTask = useCallback((id) => {

        const localDataDelete = localStorage.getItem('data');
        const newData = JSON.parse(localDataDelete).filter(item => item.id !== id);
        localStorage.setItem('data', JSON.stringify(newData));
        setMockTasks(newData)
    }, []);


    const toggleStatusChange = useCallback((id) => {

        setMockTasks((prevData) => {
            const copyData = [...prevData];
            const idx = prevData.findIndex(item => item.id === id);
            const status = copyData[idx].status.toLowerCase() === "active" ? "Done" : "Active";

            copyData[idx] = {
                ...copyData[idx],
                status
            }
            setTasksToDB(copyData);
            return copyData;
        });

    }, []);

    const setNewTaskToDB = (task) => {
        const tasks = JSON.parse(localStorage.getItem("data"));
        tasks.push(task);
        localStorage.setItem("data", JSON.stringify(tasks));
    }


    const setTasksToDB = (tasks) => {
        localStorage.setItem("data", JSON.stringify(tasks));
    }

    const addTask = (formData) => {
        const {title, description, attachedTo} = formData;
        setMockTasks((prevData => {
            const copyData = [...prevData];
            const newTask = {
                id: Math.random(),
                title: title,
                description: description,
                status: "Active",
                attachedTo: attachedTo
            }
            setNewTaskToDB(newTask);
            copyData.push(newTask);
            return copyData;
        }));

        handleCloseAddTaskModal();
    }

    useEffect(() => {
        const tasks = localStorage.getItem("data");
        if (!tasks)
            localStorage.setItem("data", JSON.stringify([]));
        else
            setMockTasks(JSON.parse(tasks));

    }, []);

    return (
        <div className="project-container">
            <h1 className="heading1">
                Todo Project
            </h1>
            <Button
                onClick={handleOpenAddTaskModal}
            >
                Add Task
            </Button>

            <Todo
                mockTasks={mockTasks}
                handleDeleteTask={handleDeleteTask}
                toggleStatusChange={toggleStatusChange}
                setModalShow={setModalShow}
                handleEdit={handleEdit}

            />

            {modalShow && <AddTask
                onHide={handleCloseAddTaskModal}
                onSubmit={addTask}
                modalShow={modalShow}
                setModalShow={setModalShow}
                editItem={editItem}
                setMockTasks={setMockTasks}
                handleEdit={handleEdit}

            />}


        </div>
    )
}
export default Project;