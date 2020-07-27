﻿using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApi.Controllers
{
    [RoutePrefix("User")]
    public class UserController : ApiController
    {
        [Route("Login")]
        [HttpGet]
        public string Login(string name, string password)
        {
            string token = null;
            try
            {
                token = BL.UserBl.Login(name, password);
                if (token != null)
                {
                    token = token + (Int32.Parse(password) * 12345678910).ToString();
                    return token;
                }
                return "notfound";
            }
            catch (Exception e)
            {
                return e.ToString();
            }
        }
        //[Route("GetByToken")]
        //[HttpGet]
        //public int GetByToken(string token)
        //{
        //    int i;
        //    string s = "";
        //    for (i = 1; i < token.IndexOf('a'); i++)
        //    {
        //        s += token[i];
        //    }
        //    int id = Int32.Parse(s) / 2;
        //    return id;
        //}
        [Route("GetUserById/{id}")]
        [HttpGet]
        public IHttpActionResult GetUserById(int id)
        {
            try
            {
                var q = BL.UserBl.GetUserById( id);
                if (q != null)
                    return Ok(q);
                return NotFound();
            }
            catch
            {
                return BadRequest();
            }
           
        }
        [HttpGet]
        [Route("token")]
        public IHttpActionResult GetUser(string name, string password)
        {

            try
            {
                var q = BL.UserBl.GetUsers();
                if (q != null)
                    return Ok(q);
                return NotFound();
            }
            catch
            {
                return BadRequest();
            }

        }
        [HttpGet]
        [Route("alluser")]
        public IHttpActionResult GetUser()
        {

            try
            {
                var q = BL.UserBl.GetUsers();
                if (q != null)
                    return Ok(q);
                return NotFound();
            }
            catch
            {
                return BadRequest();
            }

        }
        [HttpPost]
        [Route("adduser")]
        public IHttpActionResult AddUser(UserDTO user)
        {

            try
            {
                BL.UserBl.AddUser(user);
                return Ok();

            }
            catch (Exception)
            {

                throw;
            }

        }





        //// GET: api/User
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        //// GET: api/User/5
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST: api/User
        //public void Post([FromBody]string value)
        //{
        //}

        //// PUT: api/User/5
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE: api/User/5
        //public void Delete(int id)
        //{
        //}
    }
}
