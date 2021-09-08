using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using E_Forms.API.Models;


namespace E_Forms.API.Models
{
    public class UserRepository : IUserRepository
    {
        private List<UserModel> users = new List<UserModel>();
        private int _nextId = 1;

        public UserRepository()
        {
            Add(new UserModel { firstName = "first1", lastName = "last1" });
            Add(new UserModel { firstName = "first2", lastName = "last2" });
            Add(new UserModel { firstName = "first3", lastName = "last3" });
        }

        public UserModel Add(UserModel item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }

            item.Id = _nextId++;
            users.Add(item);
            return item;
        }
    }
}
