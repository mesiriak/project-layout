```typescript
interface DBMapper<D, E> {
  toDomain(entity: E): D
  toEntity(domain: D): E
}
```

Create entity mappers here. Mappers are utilities for converting dto to entity and vice versa.
