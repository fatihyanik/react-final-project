function SinglePost() {
  return (
    <div className="flex-[9]">
      <div className="p-5 pr-0">
        <img
          src="https://images.pexels.com/photos/6619161/pexels-photo-6619161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
          className="w-full h-72 rounded object-cover"
        />
        <h1 className="text-center m-[10px] text-[28px] font-serif">
          Lorem ipsum dolor sit amet.
          <div className="float-right text-[16px]">
            <i className="text-teal-600 ml-3 cursor-pointer far fa-edit"></i>
            <i className="text-red-600 ml-3 cursor-pointer  far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="mb-5 flex justify-between text-[16px] font-serif text-yellow-600">
          <span className="text-yellow-900">
            Author: <b>Fatih</b>
          </span>
          <span>1 hour ago</span>
        </div>
        <p
          className="text-gray-600 text-[18px] leading-6
            first-letter:text-7xl first-letter:font-bold first-letter:text-black
            first-letter:mr-3 first-letter:float-left"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolorum
          cumque qui saepe, maiores nihil ipsum reprehenderit voluptatem
          distinctio dicta praesentium deleniti asperiores sapiente dolore, quas
          harum facere! Rem, ducimus! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sequi nobis autem voluptatem odit repudiandae.
          Assumenda aut adipisci consectetur obcaecati, quo voluptas doloremque.
          Eum quo vel dolorum at amet necessitatibus, rerum illo animi nihil
          odio rem, enim expedita ex nemo eaque eligendi harum repudiandae
          aliquid inventore. Sequi quis sit mollitia laborum. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Esse dolorum cumque qui saepe,
          maiores nihil ipsum reprehenderit voluptatem distinctio dicta
          praesentium deleniti asperiores sapiente dolore, quas harum facere!
          Rem, ducimus! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sequi nobis autem voluptatem odit repudiandae. Assumenda aut adipisci
          consectetur obcaecati, quo voluptas doloremque. Eum quo vel dolorum at
          amet necessitatibus, rerum illo animi nihil odio rem, enim expedita ex
          nemo eaque eligendi harum repudiandae aliquid inventore. Sequi quis
          sit mollitia laborum.
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
