using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using E_Forms.API.Models;


namespace E_Forms.API.Repositories
{
    public class UserRepository : IUserRepository
    {
        private List<UserModel> users = new List<UserModel>();
        private int _nextId = 1;

        public UserRepository()
        {
            // here you can enter records into DB
        }

        public IEnumerable<UserModel> GetAll()
        {

            if (users == null)
            {
                throw new ArgumentNullException();
            }

            return users;
        }

        public UserModel Add(UserModel item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }

            item.ID = _nextId++;
            users.Add(item);
            return item;
        }
    }
}
