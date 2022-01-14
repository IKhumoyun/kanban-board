import Card from "../card";

const Column = () => {
    return (
        <div className="col-md-3 me-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title d-flex justify-content-between align-items-center">
                        <span>Column</span>
                        <div className="btn btn-outline-secondary">
                            <i className="fas fa-ellipsis-h"/>
                        </div>
                    </h5>

                    <Card/>
                </div>
            </div>
        </div>
    );
};

export default Column;