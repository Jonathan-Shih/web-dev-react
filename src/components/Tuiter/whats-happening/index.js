import {useDispatch}
    from "react-redux";
import {useState} from "react";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({
            type: 'create-tuit',
            tuit: whatsHappening
        });
    }
    return (
        <>
            <div className="d-flex whats-happening">
                <div className="p-0 pt-1 col-1">
                <img src="../tuiter/assets/rat-jam.gif" className="profileImage"/>
                </div>
                <div className="ps-3 pb-1 col-11">
                    <textarea className="whats-happening-text" placeholder="What's Happening?" value={whatsHappening}
                              onChange={(event) => setWhatsHappening(event.target.value)}>
                    </textarea>
                    <div className="row">
                        <div className="mb-2">
                            <span>
                                <a href="#"><i className="far fa-image me-3"></i></a>
                                <a href="#"><i className="fas fa-chart-line me-3"></i></a>
                                <a href="#"><i className="far fa-smile me-3"></i></a>
                                <a href="#"><i className="far fa-calendar me-3"></i></a>
                            </span>
                            <button className="btn btn-primary fa-pull-right rounded-pill pt-1 pb-1"
                                    onClick={tuitClickHandler}>
                                Tuit
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
export default WhatsHappening;