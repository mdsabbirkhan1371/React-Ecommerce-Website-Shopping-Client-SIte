import { useState } from 'react';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const handleForm = e => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleForm}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-700"
    >
      <div className="flex items-center gap-3 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === 'Login' ? (
        ''
      ) : (
        <input
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
          type="text"
        />
      )}

      <input
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        type="email"
        required
      />
      <input
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        type="text"
      />
      <div className="w-full flex justify-between text-sm mt-[-8px] ">
        <p className="cursor-pointer">Forget Your Password?</p>
        {currentState === 'Login' ? (
          <p
            onClick={() => setCurrentState('Sign Up')}
            className="cursor-pointer"
          >
            Create An Account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState('Login')}
            className="cursor-pointer"
          >
            Login Here
          </p>
        )}
      </div>
      <button className="px-5 py-2 bg-black mt-2 rounded-sm text-white ">
        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
};

export default Login;
