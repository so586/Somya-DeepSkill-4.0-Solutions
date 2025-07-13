using ASPCoreRestAPI.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ASPCoreRestAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [ServiceFilter(typeof(Filters.CustomAuthFilter))] // Apply Authorization Filter
    public class EmployeeController : ControllerBase
    {
        private List<Employee> employees;

        public EmployeeController()
        {
            employees = GetStandardEmployeeList();
        }

        private List<Employee> GetStandardEmployeeList()
        {
            return new List<Employee>
            {
                new Employee
                {
                    Id = 1,
                    Name = "Riya",
                    Salary = 50000,
                    Permanent = true,
                    Department = new Department { Id = 101, Name = "HR" },
                    Skills = new List<Skill>
                    {
                        new Skill { Id = 1, Name = "Communication" },
                        new Skill { Id = 2, Name = "Leadership" }
                    },
                    DateOfBirth = new DateTime(1999, 7, 10)
                }
            };
        }

        [HttpGet("GetStandard")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public ActionResult<List<Employee>> GetStandard()
        {
            return Ok(employees);
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult Get()
        {
            throw new Exception("Test exception from GET");
        }

        [HttpPost]
        public ActionResult Post([FromBody] Employee employee)
        {
            if (employee == null)
                return BadRequest("Invalid data");
            return Ok($"Employee {employee.Name} received.");
        }

        [HttpPut("{id}")]
        public ActionResult<Employee> Put(int id, [FromBody] Employee updatedEmployee)
        {
            if (id <= 0)
                return BadRequest("Invalid employee id");

            var employee = employees.FirstOrDefault(e => e.Id == id);
            if (employee == null)
                return BadRequest("Invalid employee id");

            // Update employee fields from input
            employee.Name = updatedEmployee.Name;
            employee.Salary = updatedEmployee.Salary;
            employee.Permanent = updatedEmployee.Permanent;
            employee.Department = updatedEmployee.Department;
            employee.Skills = updatedEmployee.Skills;
            employee.DateOfBirth = updatedEmployee.DateOfBirth;
