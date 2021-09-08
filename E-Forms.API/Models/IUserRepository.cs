using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace E_Forms.API.Models
{
    public interface IUserRepository
    {
        UserModel Add(UserModel userModel);
    }
}
