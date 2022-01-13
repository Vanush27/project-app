import React, {memo} from "react";
import "./styles.css";
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

const Task = ({
                  id,
                  title,
                  description,
                  status,
                  attachedTo,
                  handleDeleteTask,
                  toggleStatusChange,
                  handleEdit
              }) => {

    const statusClassName = status === "done" ? "status-done" : "status-active";
    const statusBtn = status === "done" ? "Active" : "Done"

    function generateRandomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    return (

        <div className="bigDiv">
            <Card style={{backgroundColor: generateRandomColor()}} className="card">
                <Card.Body>
                    <Card.Title>
                        <Link to={`/task/${id}`}>
                            {title}
                        </Link>
                    </Card.Title>
                    <Card.Title className="must-do-text">Must do : {attachedTo}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text className="status-text">
                        Status:
                        <span className={statusClassName}>
                        &nbsp;{status}
                    </span>
                    </Card.Text>
                    <Card.Text>
                        {/* Date  :  {new Date(date).format("YYYY MM DD")} */}
                    </Card.Text>
                    <div className="btns">
                        <Button variant="danger mr-2"
                                onClick={() => handleDeleteTask(id)}
                        >
                            Delete
                        </Button>
                        <Button variant="warning mr-2" onClick={() => handleEdit(id)}>Edit</Button>
                        <Button
                            variant={`${statusBtn === "Active" ? "success" : "primary"} `}
                            onClick={() => toggleStatusChange(id)}
                        >
                            {statusBtn}
                        </Button>

                    </div>

                </Card.Body>
            </Card>

        </div>


    )
}

export default memo(Task);