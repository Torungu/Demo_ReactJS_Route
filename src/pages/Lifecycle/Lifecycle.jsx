import React, { Component } from 'react'
import axios from "axios"
import Children from './Children';

export default class Lifecycle extends Component {
    //snippet taho constructor: rconst
    constructor(props) {
        super(props);
        this.state = {
            //tạo state posts dder chứa data trả về từ API
            posts: [],

            //tạo userId đẻ chứ id của user muốn lấy thông tin chi tiết từ danh sách posts
            userId: null
        };
        console.log('constructor run')
    }

    fetchPosts = () => {
        axios
            //Kiểm tra dữ liệu trước khi thêm vô thẻ url ban đầu
            .get(`https://jsonplaceholder.typicode.com/posts`, {
                params: {
                    userId: this.state.userId || null,
                }
            })
            .then((respone) => {
                console.log(respone.data)
                this.setState({ posts: respone.data })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    handleMouseMove = () => {
        console.log('mouse moving')
    }

    //-----------------------COMPONENT DID MOUNT--------------------
    //Không viết arrow function với "componentDidMount = ()=>{}". Chạy duy nhất làn render thứ 1
    //Thường dùng để xử lý việc call API, setState, timeOut,DOM dữ liệu...
    componentDidMount() {
        console.log("componentDidMount run")
        this.fetchPosts();

        document.addEventListener("mousemove", this.handleMouseMove)
    }


    //-----------------------COMPONENT DID UPDATE--------------------
    //Hàm này chạy sau mỗi lần update (hoặc lần render thứ 2 trở đi)
    /*Sử dụng giá trị state hoặc props mới để thực hiện hành động nào đó như :
        -Sd giá trị props mới để setState
        -Sd giá trị state/props mới để call API
    */
    //Lưu ý: nếu setState trong componentDidUpdate bắt buộc phải có đk nếu ko sẽ bị lập vô tận
    //Hàm này cho nhận 2 tham số props và state trước khi thay đổi
    componentDidUpdate(prevProps, prevState) {
        //check lại state khi đã update
        console.log("componetDidUpdate run", this.state)

        //Nếu state userId bị thay đổi => gọi lại hàm fetchPosts
        if (prevState.userId !== this.state.userId) {
            this.fetchPosts()
        }
    }

    //-----------------------COMPONENT WILL UNMOUNT--------------------
    //Chạy 1 lần trước khi hủy bỏ. Chủ yếu dùng để dọn dẹp các tác vụ hiện tại (Giúp giải phóng bộ nhớ tránh bị memory leaking)
    componentWillUnmount() {
        console.log("componentWillUnmount run");
        document.removeEventListener("mousemove", this.handleMouseMove)
    }

    //arrow functuin > function ( do ngữ cảnh con trỏ this)
    handleSelect = (postId) => {
        //có thể call API ở đây: nhưng nó sẽ bị lập lại nên có cách 2 ở dưới (tạo 1 userId ở state)

        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((respone) => {
                console.log(respone.data)
            })
            .error((error) => {
                console.log(error)
            })
    }


    changeUser = (e) => {
        //lấy value từ thẻ select
        const { value } = e.target
        //setState để gán giá trị vô state
        this.setState({ userId: value })
    }


    render() {
        console.log("render run", this.state)
        return (
            <div>
                <Children userId={this.state.userId} />
                {/* Select User */}
                <select onChange={this.changeUser}>
                    <option value="">Select User</option>
                    <option value={1}>User 1</option>
                    <option value={2}>User 2</option>
                    <option value={3}>User 3</option>
                    <option value={4}>User 4</option>
                    <option value={5}>User 5</option>
                    <option value={6}>User 6</option>
                    <option value={7}>User 7</option>
                    <option value={8}>User 8</option>
                    <option value={9}>User 9</option>
                    <option value={10}>User 10</option>
                </select>

                {/* Danh sách Posts */}
                <ul>
                    {this.state.posts.map((post) => {
                        return <li key={post.id} className="my-2">
                            <span className="me-2">{post.title}</span>
                            <button onClick={() => { this.handleSelect(post.id) }} className="btn btn-secondary">
                                Chi tiết
                            </button>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}
