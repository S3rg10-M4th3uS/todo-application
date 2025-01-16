package com.stefanininewm.techtest.mapper;

import com.stefanininewm.techtest.entity.Task;
import com.stefanininewm.techtest.requests.TaskPostRequestBody;
import com.stefanininewm.techtest.requests.TaskPutRequestBody;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

// Define a classe como um mapeador do MapStruct para ser usado em um componente Spring
@Mapper(componentModel = "spring")
public abstract class TaskMapper {
    public static final TaskMapper INSTANCE = Mappers.getMapper(TaskMapper.class);

    public abstract Task toTask(TaskPostRequestBody taskPostRequestBody);

    public abstract Task toTask(TaskPutRequestBody taskPutRequestBody);

}
