const sendVotes = async (votes) => {
    console.log('sending votes');
    console.log(votes);
    const body = new URLSearchParams(votes);
    try {
        console.log(votes);
        const response = await fetch("http://localhost:6060/addVote", {
            method: 'POST',
            body: body,
            redirect: 'follow'
        })
        if (!response.ok) {
            throw new Error('Network response was not OK');
        }
        return 'Sucess';
    }
    catch(e) {
        console.log(e);
        return 'error'
    }
}

export default sendVotes;