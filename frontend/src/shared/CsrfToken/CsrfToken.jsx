const CsrfToken = () => {
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    // const get_csrf = () => axios.get('http://localhost:8000/api/get_csrf').then(res => {})
    let csrftoken = getCookie('csrftoken');
    return <input type='hidden' name='csrfmiddlewaretoken' value={csrftoken}/>
}

export default CsrfToken;