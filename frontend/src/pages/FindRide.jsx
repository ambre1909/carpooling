import axios from 'axios'
import React from 'react'
import { useState } from 'react'

export default function FindRide() {
    const [find, setFind] = useState({
        from: "pune",
        to: "abad",
        date: 0,
        seats: 0,
    })
    const handleSubmit = async () => {
        try {
            const { data } = await axios.post("http://localhost:5000/finder/adddata", find)
            console.log(data);
        } catch (error) {
            console.log(error);
        }


    }
    return (<>
        <div class="container mt-5">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <div class="card mt-4">
                        <div class="card-header">Find a Ride</div>
                        <div class="card-body">
                            <div>
                                <label for="leaving" class="form-label">Leaving From</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="leaving"
                                    placeholder="Leaving From..."
                                    value={find.from}
                                    onChange={e => setFind({ ...find, from: e.target.value })}

                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please choose a username.</div>
                            </div>
                            <div>
                                <label for="Going" class="form-label">Going To</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="Going"
                                    placeholder="Going To..."
                                    value={find.to}
                                    onChange={e => setFind({ ...find, to: e.target.value })}

                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please choose a username.</div>
                            </div>
                            <div>
                                <label for="Date" class="form-label">Date</label>
                                <input
                                    type="date"
                                    class="form-control"
                                    id="Date"
                                    placeholder="Date "
                                    value={find.date}
                                    onChange={e => setFind({ ...find, date: e.target.value })}

                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please choose a username.</div>
                            </div>
                            <div>
                                <label for="seats" class="form-label">Number of seats to book</label>
                                <select id='seats' class="form-select"
                                    value={find.seats}
                                    onChange={e => setFind({ ...find, seats: e.target.value })}
                                >
                                    <option selected>Open this select menu</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                            <button type="button" class="btn btn-success w-100 mt-3" onClick={e => handleSubmit()}     >
                                Search
                            </button>
                            <p class="text-center mt-3">
                                Dont Have Account? <a href="#">Create Account</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

    )
}
